<template lang="pug">
  .hello
    .ui.container
      sui-segment(raised='').code
        sui-header(size="large") 想學寫網站嗎?
        router-link(to="/flow")
          img.logo(src="../assets/logo.png")
        sui-header(size="large") 用Vue.js架網站吧
          .sub.header Vue很簡潔，可以參考看看這個
            a(href="https://jsbin.com/rahuhoj/edit?html,js,output", target="_blank") 99乘法表的範例
            | 就會有個概念了。
        br
        br
        sui-grid(:columns="4" stackable)
          sui-grid-row
            sui-grid-column
              .light-red
                sui-header(size="medium") 資源匯整
                sui-list(ordered)
                  a(is="sui-list-item" v-for="l in links", :key="l.n", :href="l.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + l.h")
                    | {{ l.n }}
            sui-grid-column
              .light-blue
                sui-header(size="medium") Bestian作品
                sui-list(ordered)
                  a(is="sui-list-item" v-for="w in works", :key="w.n", :href="w.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + w.h")
                    | {{ w.n }}
            sui-grid-column
              .light-green
                sui-header(size="medium") 程式歷程
                sui-list(ordered)
                  div Bestian寫過純html+css+js的網站，後來學習jQuery，之後用AngularJS，最後停駐在實用的Vue框架上。
                  a(is="sui-list-item" v-for="b in bestians", :key="b.n", :href="b.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + b.h")
                    | {{ b.n }}
            sui-grid-column
              .light-yellow
                sui-header(size="medium") 學生作品
                sui-list(ordered)
                  a(is="sui-list-item" v-for="s in students", :key="s.n", :href="s.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + s.h")
                    | {{ s.n }} - by {{ s.a }}
</template>

<script>
export default {
  name: 'Course',
  data () {
    return {
      links: [
        {n: 'vue', h: 'http://goban.tw/#/see/vue/0/0'},
        {n: 'html', h: 'http://goban.tw/#/see/html/0/0'},
        {n: 'css', h: 'http://goban.tw/#/see/css/0/0'},
        {n: 'javascript', h: 'http://goban.tw/#/see/javascript/0/0'}
      ],
      works: [
        {n: '本網站', h: 'http://hack.bestian.tw'},
        {n: '自然美食DIY', h: 'http://food.bestian.tw'},
        {n: '自由數學', h: 'http://math.alearn.org.tw'},
        {n: '自學地圖', h: 'http://map.alearn.org.tw'},
        {n: '自學2.0', h: 'http://we.alearn.org.tw'},
        {n: '知識棋盤', h: 'http://goban.tw'},
        {n: '認照片遊戲', h: 'http://elder.game.tw'},
        {n: '自製的手機App', h: 'http://goban.tw/#/see/bestian_apps/0/0'},
        {n: '自製的其他網站', h: 'http://goban.tw/#/see/bestian_apps/1/0'}
      ],
      bestians: [
        {n: 'App開發小記', h: 'https://docs.google.com/document/d/1dDTbuP-U94GRfVV30jgGJMrA-eNy4JZsN40-jDuFwNs/edit#'},
        {n: 'Be@github', h: 'https://www.github.com/bestian'}
      ],
      students: [
        {n: 'Minecraft介紹網站', h: 'https://github.com/Hans-lee-2006/minecraft', a: 'Hans-lee-2006'},
        {n: '自製模型介紹網站', h: 'https://github.com/jinglunT/model', a: 'jinglunT'},
        {n: 'BMI計算機', h: 'https://github.com/bestian/bmi', a: '共同創作'},
        {n: '小道小報fork版', h: 'https://github.com/Hans-lee-2006/xikxik', a: 'Hans-lee-2006+Bestian'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
