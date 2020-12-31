<template>
  <div class="home" v-clickoutside="handleClose">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    handleClose() {
      console.log("66666", 66666);
    }
  }
};
</script>
