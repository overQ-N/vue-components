<!--
 * @Author: overQ
 * @Date: 2020-08-21 10:15:56
 * @LastEditors: overQ
 * @LastEditTime: 2020-08-24 13:52:45
 * @FilePath: \kdt-base-ui\src\components\excelExport\excel-upload.vue
 * @Description: excel上传预览组件 
-->
<template>
  <div @click="handleUpload" class="upload">
    <input type="file" class="upload-input" ref="upload-input" @change="handleChange" />
    <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
      <i class="el-icon-upload"></i>
      <div class="upload-text">
        将文件拖到此处，或
        <el-button :loading="loading" size="mini" type="text">
          点击上传
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  props: {
    beforeUpload: Function,
    onSuccess: Function
  },
  data() {
    return {
      loading: false,
      excelData: {
        header: null,
        results: null
      }
    }
  },
  methods: {
    handleUpload() {
      this.$refs['upload-input'].click()
    },
    // 拖拽上传
    handleDrop(e) {
      e.stopPropagation()
      e.preventDefault()
      if (this.loading) return
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        this.$message.error('请选择上传文件!')
        return
      }
      const rawFile = files[0]
      if (!this.isExcel(rawFile)) {
        this.$message.error('仅支持 .xlsx, .xls, .csv 文件')
        return false
      }
      this.upload(rawFile)
      e.stopPropagation()
      e.preventDefault()
    },
    handleDragover(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    handleChange(e) {
      const files = e.target.files
      const rawFile = files[0]
      if (!rawFile) return
      if (!this.isExcel(rawFile)) {
        this.$message.error('仅支持 .xlsx, .xls, .csv 文件')
        return false
      }
      this.upload(rawFile)
    },
    upload(rawFile) {
      this.$refs['upload-input'].value = null //修复不能上传同一文件
      if (!this.beforeUpload) {
        this.readerData(rawFile)
        return
      }
      const before = this.beforeUpload(rawFile)
      if (before) {
        this.readerData(rawFile)
      }
    },
    readerData(rawFile) {
      this.loading = true
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => {
          const result = e.target.result
          const workbook = XLSX.read(result, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const workerSheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(workerSheet)
          const results = XLSX.utils.sheet_to_json(workerSheet)
          this.generateData({ header, results })
          this.loading = false
          resolve()
        }
        reader.readAsArrayBuffer(rawFile)
      })
    },
    // 表格头
    getHeaderRow(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },
    generateData({ header, results }) {
      this.excelData.header = header
      this.excelData.results = results
      this.onSuccess && this.onSuccess(this.excelData)
    },
    // 是否为excel文件
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name)
    }
  }
}
</script>

<style lang="scss" scoped>
.upload{
  cursor: pointer;
}
.upload-input {
  display: none;
  z-index: -999;
}
.drop {
  border: 1px dashed #ccc;
  text-align: center;
  height: 150px;
  width: 300px;
  .el-icon-upload{
    color: #c0c4cc;
    font-size: 40px;
    padding-top: 30px;
  }
}
</style>
