<template>
  <div>
    CHild111111111111111111111111111111111111111111
    <el-button @click="getData">getData</el-button>
  </div>
</template>

<script>
export default {
  mounted(){
  },
  methods:{
    getData(){
      console.log('dosomenthos')
      fetch('/cityInfo').then(res=>{
        console.log('res1', res)
        // return res.json()
      }).then(res=>{
        console.log('res', res)
      })
      this.$axios.get('/cityInfo',ren=>{
      console.log('ren', ren)
    })
    
    }
  }
}
</script>

<style>

</style>