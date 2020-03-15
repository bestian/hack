<template lang="pug">
  .hello
    .ui.container
      sui-segment(raised='').sunflower
        router-link(to="/course")
          img.logo(src="../assets/logo.png")
        sui-header(size="large") {{ msg }}
        p 以個別化的教育方法，量身打造合適的學習進程。
        p 不只教知識，更在激發主動創發的自學精神，培養「彷」、「創」、「改」的良好學習習慣。
        p Vue.js是目前最夯的前端框架之一，可以有架構的建置網站。
        p 和Bestian 學習 Vue.js 是很好的入門~
        p 按
          router-link(to="/course")
            img.ui.mini.inline.image.haha(src="../assets/logo.png")
          | 可以跳到下一頁喔~

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
