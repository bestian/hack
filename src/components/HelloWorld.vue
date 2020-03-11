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
  props: ['likes'],
  data () {
    return {
      msg: '歡迎學習寫網站，請按圖開始'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
