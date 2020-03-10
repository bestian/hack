<template lang="pug">
  .hello.ui.container
    router-link(to="/")
      img.logo(src="../assets/logo.png")
    sui-segment(raised='', padded='')
      sui-header(size="large") {{ msg }}
      sui-header(size="medium") 跟Bestian遠距學習有什麼好呢？
      p.ans 以個別化的教育方法，量身打造合適的學習進程。
      p.ans 不只教知識，更在激發主動創發的自學精神，培養良好的學習習慣。
      sui-header(size="medium") 跟Bestian遠距學習怎麼互動？
      p.ans 透過螢幕分享，可以即時和學生協作
      p.ans 在意學生每個好奇點，盡量回答每一個提問。
      p.ans 搭配
        a(href="http://goban.tw", target="_blank") 零時黑板
        | 教材，培養孩子自學的習慣。
      sui-header(size="medium") 跟Bestian遠距學習需要交通嗎？
      p.ans 省去交通勞頓，在家即可學習。
      p.ans 只要有網路，各地都能上課。
      sui-header(size="medium") 怎樣的孩子適合此課程？
      p.ans 小五以上(10+歲)、有學習意願、能夠自律的學生。
      p.ans (遠距課沒辦法伸手去管秩序，小朋友要能自律才能好好進行)
      sui-header(size="medium") 家長可以看到孩子的作品嗎？
      p.ans 可以，在進行中，可以請孩子在家用近端瀏覽器展示。
      p.ans 如果未來正式發佈上網，就會有一個正式的網址可以連結。
      sui-header(size="medium") 為什麼要上課，不是自學程式就好？
      p.ans 現在網上資源很多，當然可以自學。
      p.ans 但是有一位有經驗的工程師可以引入門，之後修行看個人，會比較容易。

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
