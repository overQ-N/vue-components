<template>
  <el-table :data="virtualData.virtualRows" :max-height="300" border stripe>
    <el-table-column prop="date" label="日期"></el-table-column>
    <el-table-column prop="name" label="名字"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
function debounce(fn, timeout) {
  let timer = null;
  return function() {
    fn.apply(this, arguments);
  };
}
export default {
  data() {
    return {
      data: [],
      virtualData: {
        virtualRows: [],
        rowHeight: 60
      }
    };
  },
  mounted() {
    this.data = new Array(100).fill(0).map(item => ({
      date: `2016-12-${this.randomNum()}`,
      name: "王小虎",
      address: "上海滩"
    }));
    let i = document.createElement("i");
    i.id = "vheight";
    i.style.width = "0";
    i.style.float = "right";
    document.querySelector(".el-table__body-wrapper").append(i);
    document.querySelector(".el-table__body").style.float = "left";
    document.querySelector("#vheight").style.height =
      this.data.length * this.virtualData.rowHeight + "px";
    this.virtualData.virtualRows = this.data.filter(
      (item, index) => index >= 0 && index <= 20
    );

    document
      .querySelector(".el-table__body-wrapper")
      .addEventListener("scroll", () => {
        let s = document.querySelector(".el-table__body-wrapper").scrollTop,
          h = this.virtualData.rowHeight,
          c = "";
        c = Math.floor(s / h);
        // 16为横向滚动条的高度
        if (
          s >=
          this.data.length * h -
            document.querySelector(".el-table__body-wrapper").offsetHeight -
            16
        ) {
          s =
            this.data.length * h -
            document.querySelector(".el-table__body-wrapper").offsetHeight;
        }
        if (s <= 0) {
          s = 0;
        }
        document.querySelector(
          ".el-table__body-wrapper .el-table__body"
        ).style.transform = `translateY(${s}px)`;
        this.virtualData.virtualRows = this.data.filter((x, i, list) => {
          if (i > list.length - 15) c = list.length - 15;
          return i >= c && i < c + 20;
        });
        // this.$nextTick(() => {
        //   if (this.selectIdx.length > 0) {
        //     let s = this.tableData.leadsList.map(x => {
        //       if (this.selectIdx.includes(x.leads_id)) {
        //         this.$refs.mulTable.toggleRowSelection(x)
        //       }
        //       return x
        //     })
        //   }
        //   if (this.selectIdx.length > 0 && this.selectIdx.length < this.pageSize) {
        //     setTimeout(() => {
        //       let pro = document.querySelector('.el-table-column--selection')
        //       pro.querySelector('.el-checkbox__input').classList.add('is-indeterminate')
        //       pro.querySelector('.el-checkbox__input').classList.remove('is-checked')
        //     }, 100)
        //   }
        // })
      });
  },
  methods: {
    randomNum(len = 2) {
      return Math.ceil(Math.random() * 1000000)
        .toString()
        .substr(0, len);
    },
    getList() {
      if (true) {
      }
    }
  }
};
</script>

<style></style>
