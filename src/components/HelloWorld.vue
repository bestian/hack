<template lang="pug">
  .hello
    sui-segment(raised='')
      router-link(to="/course")
        img.logo(src="../assets/logo.png")
      router-link(to="/course")
        sui-header(size="large") {{ msg }}
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '歡迎，請按此'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
