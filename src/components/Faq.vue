<template lang="pug">
  .hello.ui.container
    sui-segment(raised='', padded='', align='left')
      router-link(to="/quiz")
        img.small.float.left(src="/img/elf.png", alt="elf")
      div.fluid.sh(:class="{dark: dark}")
        sui-header(size="large") {{ $t(msg) }}
        router-link(to="/chat")
          img.logo(src="../assets/logo.png")
      .light-blue.sh(:class="{dark: dark}")
        sui-header(size="large")
          | {{$t('Vue是什麼？')}}
        p {{$t('vue是一個網站設計的框架(framework)。目前十分流行。學習vue的同時，也可以同步學到html, css和javascript')}}
        p {{$t('簡而言之，框架(framework)就是一套規範或者規則（思想），大家（程式設計師）在該規範或者規則（思想）下工作。')}}
        p {{$t('參考')}}
          a(href="http://vuejs.org", target="_blank") {{$t('Vue官網')}}
        sui-header(size="large") 
          | {{$t('Vue有多簡潔呢？')}}
        p.ans {{$t('Vue很簡潔，可以參考看看這個')}}
          a(href="https://jsbin.com/rahuhoj/edit?html,js,output", target="_blank") {{$t('99乘法表的範例')}}
          | {{$t('就會有個概念了。')}}
      .light-green.sh(:class="{dark: dark}")
        sui-header(size="large") {{$t('跟Bestian遠距學習有什麼好呢？')}}
        p.ans {{$t('以個別化的教育方法，量身打造合適的學習進程。')}}
        p.ans {{$t('不只教知識，更在激發主動創發的自學精神，培養良好的學習習慣。')}}
        sui-header(size="large") {{$t('跟Bestian遠距學習怎麼互動？')}}
        p.ans {{$t('透過螢幕分享，可以即時和學生協作')}}
        p.ans {{$t('在意學生每個好奇點，盡量回答每一個提問。')}}
        p.ans {{$t('搭配')}}
          a(href="http://goban.tw", target="_blank") {{$t('零時黑板')}}
          | {{$t('教材，培養學生自學的習慣。')}}
        sui-header(size="large") {{$t('跟Bestian遠距學習需要交通嗎？')}}
        p.ans {{$t('省去交通勞頓，在家即可學習。')}}
        p.ans {{$t('只要有網路，各地都能上課。')}}
      .light-yellow.sh(:class="{dark: dark}")
        sui-header(size="large") {{$t('怎樣的學生適合此課程？')}}
        p.ans {{$t('小五以上(10+歲)、有學習意願、能夠自律的學生。')}}
        p.ans {{$t('(遠距課沒辦法伸手去管秩序，學生要能自律才能好好進行)')}}
        sui-header(size="large") {{$t('需要什麼設備？')}}
        p.ans {{$t('一台能上網、有鏡頭和麥克風的筆電或桌電')}}
        sui-header(size="large") {{$t('家長可以看到學生的作品嗎？')}}
        p.ans {{$t('可以，在進行中，可以請學生在家用近端瀏覽器展示。')}}
        p.ans {{$t('如果正式發佈上網，就會有一個正式的網址可以連結。')}}
      .light-blue.sh(:class="{dark: dark}")
        sui-header(size="large") {{$t('大人也可以參加嗎？')}}
        p.ans {{$t('當然，歡迎報名')}}
        sui-header(size="large") {{$t('如果是微創工作者，有明確目標，課程的內容可以量身打造嗎？')}}
        p.ans {{$t('當然可以，如果想架形象網站或是商品、活動介紹的網站，我們可以專門往這方向來合作。')}}
        sui-header(size="large") {{$t('可以自訂域名嗎？')}}
        p.ans {{$t('當然可以，例如在')}}
          a(href = "http://myname.pchome.com.tw/", target="_blank") {{$t('pchome買網址')}}
          | {{$t('買一個域名，再連結到github pages就行了。')}}
      .light-red.sh(:class="{dark: dark}")
        sui-header(size="large") {{$t('為什麼要上課，不是自學程式就好？')}}
        p.ans {{$t('現在網上資源很多，當然可以自學。')}}
        p.ans {{$t('但是有先行者帶領，比較事半功倍。')}}
        sui-header(size="large") {{$t('為什麼要從Vue入門，不是從html+css+javascript？')}}
        p.ans {{$t('Vue是一個完整的框架，學生可以從範本改起，邊改邊學習')}}
          a(href = "http://goban.tw/#/see/html/0/0", target="_blank") html
          | +
          a(href = "http://goban.tw/#/see/css/0/0", target="_blank") css
          |+
          a(href = "http://goban.tw/#/see/javascript/0/0", target="_blank") javascript
          |。
      .light-green.sh(:class="{dark: dark}")
        sui-header(size="large") {{$t('如果設定比較簡單的目標呢？比方說前10堂課可能會學習到什麼？')}}
        p.ans 1. {{$t('如何用Vue創建網站')}}
        p.ans 2. {{$t('放超連結與放圖片')}}
        p.ans 3. {{$t('設計主題，分析使用者經驗')}}
        p.ans 4. {{$t('如何把資料結構化，再用v-for呈現')}}
        p.ans 5. {{$t('網站的架構')}}
        p.ans 6. {{$t('路由與導航列的架設')}}
        p.ans 7. margin, padding, font-size, text-decoration
        p.ans 8. {{$t('使用配色器')}}
        p.ans 9. {{$t('用Github pages發佈上網')}}
        p.ans 10. {{$t('動態標題')}}
        p.ans 11. {{$t('社交平台元資料')}}
        p.ans 12. markdown
        p.ans 13. {{$t('互動功能與函式')}}
        p.ans 14. {{$t('使用google分析追蹤使用者流量')}}
        p.ans {{$t('這些不是每堂課教一樣東西，而是邊做邊學，學生作品的主題有別，學到的東西也會不一樣。')}}
      .light-blue.sh(:class="{dark: dark}")
        sui-header(size="large") {{$t('如果設定比較難的目標呢？比方說再10堂課可能會學習到什麼？')}}
        p.ans 1. {{$t('取得遠端資料')}}
        p.ans 2. {{$t('資料剖析與呈現')}}
        p.ans 3. {{$t('套件和API')}}
        p.ans 4. {{$t('GET, POST')}}
        p.ans 5. {{$t('firebase')}}
        p.ans 6. {{$t('自製留言板')}}
        p.ans 7. {{$t('影音檔的處理')}}
        p.ans 8. v-if, v-else, v-show
        p.ans 9. :style, :class
        p.ans 10. {{$t('漸變與動畫效果')}}
        p.ans 11. {{$t('深入學習css和sass')}}
        p.ans 12. pug
        p.ans 13. {{$t('UI框架，例如Semantic-UI')}}
        p.ans {{$t('程式碼太多學不完，最重要的是，過程中陪養學生的自學能力，可以自己查資料解決問題。')}}
      .light-red.sh(:class="{dark: dark}")
        sui-header(size="large") {{$t('其他問題？')}}
        p.ans
          a(href="mailto:bestian@gmail.com", target="_blank")
            | {{$t('請洽詢')}}: bestian@gmail.com
      // iframe(src="https://app.sli.do/event/1swgLtupKaAWYh1TfMrhHc", width="600", height="350")

</template>
<script>
export default {
  name: 'FAQ',
  props: ['likes', 'dark'],
  metaInfo () { 
    return {
      title: this.$t('常見問題')
    }
  },
  data() {
    return {
      msg: '常見問題',
    };
  },
  methods: {
    scrollFix(hashbang) {
      window.scroll({
        top: hashbang,
        behavior: 'smooth',
      });
    },
  },
  mounted() {
    setTimeout(() => this.scrollFix(this.$route.params.bookmark), 100);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fluid {
  text-align: center;
  width:100%;
}

.ui.large.header {
  padding: 1em 0.3em;
}

p.ans::before {
  content: '*'
}

.dark {
  background-color: black;
  color: white;
}

</style>
