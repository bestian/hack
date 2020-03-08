<template lang="pug">
  .hello
    sui-segment(raised='')
    h1 {{ msg }}
    img(src="../assets/logo.png")
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '歡迎'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
