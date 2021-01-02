<template lang="pug">
  .hello
    .ui.container
      sui-segment(raised='').sunflower
        router-link(to="/course")
          img.logo(src="../assets/logo.png", alt="vue")
        sui-header(size="large") 歡迎學習寫網站
        h3 以一對1~2人的小規模視訊教學，量身打造合適的學習進程。
        p 激發主動創發的自學精神，培養「彷」、「創」、「改」的良好學習習慣。
        p Vue.js是目前最夯的前端框架之一，簡捷、有力、架構清楚。
        p 按
          router-link(to="/course")
            img.ui.mini.inline.image.haha(src="../assets/logo.png", alt="vue")
          | 可以跳到下一頁喔~

</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['likes'],
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
