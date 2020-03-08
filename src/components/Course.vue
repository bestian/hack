<template lang="pug">
  .hello
    sui-segment(raised='')
      sui-header.tada(size="large") {{ msg }}
      router-link(to="/home")
        img(src="../assets/logo.png")
      sui-header.haha(size="medium") 想學寫網站嗎? Vue.js 是很好的入門喔~
      sui-header.haha(size="medium") 學習資源
      sui-list(ordered)
        a(is="sui-list-item" v-for="l in links", :key="l.n", :href="l.h") {{ l.n }}
</template>

<script>
export default {
  name: 'Course',
  data () {
    return {
      msg: '用Vue.js架網站',
      links: [
        {n: 'vue黑板', h: 'http://goban.tw/#/see/vue/0/1'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tada {
  position: relative;
  animation: tada 4s infinite;
}

@keyframes tada {
  0%   {color:red; left:-5vw; top:0px;}
  50%  {color:blue; left:5vw; top:0x;}
  100% {color:red; left:-5vw; top:0px;}
}

</style>
