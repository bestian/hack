<template lang="pug">
  .hello.ui.container
    sui-segment(raised='', padded='', align='left')
      router-link(to="/quiz")
        img.small.float.left(src="/img/elf.png", alt="elf")
      div.fluid.sh(:class="{dark: dark}")
        sui-header(size="large") {{ msg }}
        router-link(to="/chat")
          img.logo(src="../assets/logo.png")
      .light-blue.sh(:class="{dark: dark}")
        sui-header(size="large")
          | Vue是什麼？
        p vue是一個網站設計的框架(framework)。目前十分流行。學習vue的同時，也可以同步學到html, css和javascript
        p 簡而言之，框架(framework)就是一套規範或者規則（思想），大家（程式設計師）在該規範或者規則（思想）下工作。
        p 參考
          a(href="http://vuejs.org", target="_blank") Vue官網
          | 和
          a(href="https://cli.vuejs.org/", target="_blank") Vue-Cli官網
          | 和
          a(href="http://goban.tw/#see/vue/0/0", target="_blank") Vue黑板
        sui-header(size="large") Vue的程式碼有多簡潔呢？
        p.ans 很簡潔，可以參考看看這個
          a(href="https://jsbin.com/rahuhoj/edit?html,js,output", target="_blank") 99乘法表的範例
          | 就會有個概念了。
      .light-green.sh(:class="{dark: dark}")
        sui-header(size="large") 跟Bestian遠距學習有什麼好呢？
        p.ans 以個別化的教育方法，量身打造合適的學習進程。
        p.ans 不只教知識，更在激發主動創發的自學精神，培養良好的學習習慣。
        sui-header(size="large") 跟Bestian遠距學習怎麼互動？
        p.ans 透過螢幕分享，可以即時和學生協作
        p.ans 在意學生每個好奇點，盡量回答每一個提問。
        p.ans 搭配
          a(href="http://goban.tw", target="_blank") 零時黑板
          | 教材，培養學生自學的習慣。
        sui-header(size="large") 跟Bestian遠距學習需要交通嗎？
        p.ans 省去交通勞頓，在家即可學習。
        p.ans 只要有網路，各地都能上課。
      .light-yellow.sh(:class="{dark: dark}")
        sui-header(size="large") 怎樣的學生適合此課程？
        p.ans 小五以上(10+歲)、有學習意願、能夠自律的學生。
        p.ans (遠距課沒辦法伸手去管秩序，學生要能自律才能好好進行)
        sui-header(size="large") 需要什麼設備？
        p.ans 一台能上網、有鏡頭和麥克風的筆電或桌電
        sui-header(size="large") 家長可以看到學生的作品嗎？
        p.ans 可以，在進行中，可以請學生在家用近端瀏覽器展示。
        p.ans 如果未來正式發佈上網，就會有一個正式的網址可以連結。
      .light-blue.sh(:class="{dark: dark}")
        sui-header(size="large") 大人也可以參加嗎？
        p.ans 當然歡迎報名
        sui-header(size="large") 如果是微創工作者，有明確目標，課程的內容可以量身打造嗎？
        p.ans 當然可以，如果想架形象網站或是商品、活動介紹的網站，我們可以專門往這方向來合作。
        sui-header(size="large") 如果是微創工作者，有明確目標，可以自訂域名嗎？
        p.ans 當然可以，例如在
          a(href = "http://myname.pchome.com.tw/", target="_blank") pchome買網址
          | 買一個域名，再連結到github pages就行了。
      .light-red.sh(:class="{dark: dark}")
        sui-header(size="large") 為什麼要上課，不是自學程式就好？
        p.ans 現在網上資源很多，當然可以自學。
        p.ans 但是有經驗的先行者帶領，比較事半功倍。
        p.ans 即時互動、觀念釐清、真實的人我互動
        p.ans 人的指導與機器式引導還是有區別的
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
        sui-header(size="large") 學生上課是每個帳戶登錄進來看到的內容，只跟自己的功課有關嗎? 還是每個人都會看到所有人的作業 (但不能更改)?
        p 是後者，除非對方願意開共筆權限給你，才能更改。基本上鼓勵相互幫忙。
        sui-header(size="large") 學生的作品原始碼是公開的嗎？
        p 是的，我們用免費的
          a(href = "https://www.github.com/", target = "_blank") Github
          | 帳號創建的專案都是公開的。
      .light-green.sh(:class="{dark: dark}")
        sui-header(size="large") 如果設定比較簡單的目標呢？比方說前10堂課可能會學習到什麼？
        p.ans 1. 如何用Vue創建網站
        p.ans 2. 放超連結與放圖片
        p.ans 3. 設計主題，分析使用者經驗
        p.ans 4. 如何把資料結構化，再用v-for呈現
        p.ans 5. 使用者的設定與網站的架構
        p.ans 6. 路由(router)與導航列的架設
        p.ans 7. margin, padding, font-size, text-decoration等
        p.ans 8. 使用配色器
        p.ans 9. 自訂專案目標以及用Github pages發佈上網
        p.ans 10. 修改標題
        p.ans 11. 臉書元資料和臉書分享按鈕
        p.ans 12. markdown語法
        p.ans 13. 互動功能與函式
        p.ans 14. 使用google分析追蹤使用者流量
        p.ans 這些不是每堂課教一樣東西，而是邊做邊學，學生作品的主題有別，學到的東西也會不一樣。
      .light-blue.sh(:class="{dark: dark}")
        sui-header(size="large") 如果設定比較難的目標呢？比方說再10堂課可能會學習到什麼？
        p.ans 1. 取得遠端資料
        p.ans 2. 資料剖析與呈現
        p.ans 3. 各種需要的套件和API
        p.ans 4. GET和POST
        p.ans 5. firebase初步
        p.ans 6. 自製留言板
        p.ans 7. 影音檔的處理
        p.ans 8. v-if, v-else, v-show等
        p.ans 9. :style, :class等
        p.ans 10. 漸變與動畫效果
        p.ans 11. 深入學習css
        p.ans 12. pug語法
        p.ans 13. UI框架，例如Semantic-UI
        p.ans 這些不是每堂課教一樣東西，而是邊做邊學。最重要的是，程式碼太多學不完，過程中陪養學生的自學能力，可以自己查資料解決問題。
      .light-yellow.sh(:class="{dark: dark}")
        sui-header(size="large") 學費怎麼算？
        p.ans 參見
          router-link(to="/payment") 禮物
          | 與
          router-link(to="/payment") 學費
      .light-red.sh(:class="{dark: dark}")
        sui-header(size="large") 其他問題？
        p.ans
          a(href="mailto:bestian@gmail.com", target="_blank")
            | 請洽詢: bestian@gmail.com
      iframe(src="https://app.sli.do/event/1swgLtupKaAWYh1TfMrhHc", width="600", height="350")

</template>
<script>
export default {
  name: 'FAQ',
  props: ['likes', 'dark'],
  metaInfo: {
    title: '常見問題',
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
