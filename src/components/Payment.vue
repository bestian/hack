<template lang="pug">
  .hello
    sui-segment(raised='')
      sui-header(size="large") {{ msg }}
      router-link(to="/")
        img.logo(src="../assets/logo.png")
      sui-header.haha(size="large") 要怎麼上課呢?
        .ui.sub.header 視訊連線是很好的方式喔~
      br
      br
      sui-grid(:columns="2" divided)
        sui-grid-row
          sui-grid-column
            sui-header.haha(size="medium") 一對一
              .ui.sub.header
                | $NT1200 / 時
          sui-grid-column
            sui-header.haha(size="medium") 小團體
              .ui.sub.header
                | $NT500 / 人時
</template>
<script>
export default {
  name: 'Payment',
  data () {
    return {
      msg: '收費標準'
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
