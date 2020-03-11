<template lang="pug">
  .hello.ui.container
    sui-header(size="large") {{ msg }}
    router-link(to="/")
      img.logo(src="../assets/logo.png")
    .ui.list
      .item(v-for="c in chats" :key="c.t")
        | {{ c.n }} 說:
        | {{ c.t }}
    br
    br

</template>
<script>

export default {
  name: 'Chat',
  props: ['likes', 'chats'],
  data () {
    return {
      msg: '留言版'
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
