<template lang="pug">
  .hello
    sui-segment(raised='')
      router-link(to="/course")
        img.logo(src="../assets/logo.png")
        sui-header(size="large") {{ msg }}
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '歡迎，請按圖換下一頁'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
