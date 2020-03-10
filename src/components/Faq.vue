<template lang="pug">
  .hello
    sui-segment(raised='')
      sui-header(size="large") {{ msg }}

</template>
<script>
export default {
  name: 'FAQ',
  data () {
    return {
      msg: '常見問題'
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
