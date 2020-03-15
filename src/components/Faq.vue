<template lang="pug">
  .hello.ui.container
    sui-header(size="large") {{ msg }}
    router-link(to="/chat")
      img.logo(src="../assets/logo.png")
    sui-segment(raised='', padded='', align='left')
      sui-header(size="large")
        | Vue是什麼？
      p vue是一個網站設計的框架(framework)。目前十分流行。學習vue的同時，也可以同步學到html, css和javascript
      p 簡而言之，框架(framework)就是一套規範或者規則（思想），大家（程式設計師）在該規範或者規則（思想）下工作。
      p 參考
        a(href="http://goban.tw/#see/vue/0/0") Vue黑板
      sui-header(size="large") Vue的程式碼有多簡潔呢？
      p.ans 很簡潔，可以參考看看這個
        a(href="https://jsbin.com/rahuhoj/edit?html,js,output", target="_blank") 99乘法表的範例
        | 就會有個概念了。
      sui-header(size="large") 跟Bestian遠距學習有什麼好呢？
      p.ans 以個別化的教育方法，量身打造合適的學習進程。
      p.ans 不只教知識，更在激發主動創發的自學精神，培養良好的學習習慣。
      sui-header(size="large") 跟Bestian遠距學習怎麼互動？
      p.ans 透過螢幕分享，可以即時和學生協作
      p.ans 在意學生每個好奇點，盡量回答每一個提問。
      p.ans 搭配
        a(href="http://goban.tw", target="_blank") 零時黑板
        | 教材，培養孩子自學的習慣。
      sui-header(size="large") 跟Bestian遠距學習需要交通嗎？
      p.ans 省去交通勞頓，在家即可學習。
      p.ans 只要有網路，各地都能上課。
      sui-header(size="large") 怎樣的孩子適合此課程？
      p.ans 小五以上(10+歲)、有學習意願、能夠自律的學生。
      p.ans (遠距課沒辦法伸手去管秩序，小朋友要能自律才能好好進行)
      sui-header(size="large") 家長可以看到孩子的作品嗎？
      p.ans 可以，在進行中，可以請孩子在家用近端瀏覽器展示。
      p.ans 如果未來正式發佈上網，就會有一個正式的網址可以連結。
      sui-header(size="large") 為什麼要上課，不是自學程式就好？
      p.ans 現在網上資源很多，當然可以自學。
      p.ans 但是有經驗的先行者帶領，比較事半功倍。
      sui-header(size="large") 為什麼要從Vue入門，不是從html+css+javascript？
      p.ans Vue是一個完整的框架，學生可以從範本改起，邊改邊學習
        a(href = "http://goban.tw/#/see/html/0/0", target="_blank") html
        | +
        a(href = "http://goban.tw/#/see/css/0/0", target="_blank") css
        |+
        a(href = "http://goban.tw/#/see/javascript/0/0", target="_blank") javascript
        |。
      p.ans 原則上，我們會先教
        a(href = "http://goban.tw/#/see/html/0/0", target="_blank") html
        |+
        a(href = "http://goban.tw/#/see/css/0/0", target="_blank") css
        |，
        a(href = "http://goban.tw/#/see/javascript/0/0", target="_blank") javascript
        | 比較晚教。
      p.ans 但是，
        a(href = "https://vuejs.org/v2/guide/routing.html", target="_blank") 路由(router)
        | 和把資料結構化，以
        a(href = "https://vuejs.org/v2/guide/list.html", target="_blank") v-for
        | 的方式重覆生成html段落，會比較早教。
      sui-header(size="large") 如果學生有透過這上課，是每個帳戶登錄進來看到的內容，會跟自己的功課有關嗎? 還是每個人都會看到所有在零時黑板上課的人的作業 (但不能更改)?
      p 是後者，每個人都會看到所有在零時黑板上課的人的作業 (但不能更改，除非對方願意開共筆權限給你)
      sui-header(size="large") 學生的作品原始碼是公開的嗎？
      p 是的，我們用免費的
        a(href = "https://www.github.com/", target = "_blank") Github
        | 帳號創建的專案都是公開的。
      sui-header(size="large") 請問如果要學會如何用vue編寫黑板，大概會需要幾堂課呢?
      p 其實零時黑板只是網址收集器，網站都是收集來的。要編內容一點也不難。
      p 當然，要用vue重頭寫出一個零時黑板網站，可能要學一年吧~
      sui-header(size="large") 學費怎麼算？
      p.ans $NT1200 / 時，一對二時均攤。
      sui-header(size="large") 其他問題？
      p.ans
        a(href="mailto:bestian@gmail.com", target="_blank")
          | 洽詢: bestian@gmail.com

</template>
<script>
export default {
  name: 'FAQ',
  props: ['likes'],
  data () {
    return {
      msg: '常見問題'
    }
  },
  methods: {
    scrollFix: function (hashbang) {
      window.scroll({
        top: hashbang,
        behavior: 'smooth'
      })
    }
  },
  mounted: function () {
    setTimeout(() => this.scrollFix(this.$route.params.bookmark), 100)
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
