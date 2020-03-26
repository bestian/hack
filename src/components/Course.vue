<template lang="pug">
  .hello
    .ui.container
      sui-segment(raised='').code
        sui-header(size="large") {{ msg }}
        router-link(to="/flow")
          img.logo(src="../assets/logo.png")
        sui-header(size="large") 想學寫網站嗎?
          .sub.header 和Bestian 學習 Vue.js 是很好的入門喔~
        br
        br
        sui-grid(:columns="4" stackable)
          sui-grid-row
            sui-grid-column
              .light-red
                sui-header(size="medium") 學習資源
                sui-list(ordered)
                  a(is="sui-list-item" v-for="l in links", :key="l.n", :href="l.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + l.h")
                    | {{ l.n }}
            sui-grid-column
              .light-blue
                sui-header(size="medium") Bestian的作品
                sui-list(ordered)
                  a(is="sui-list-item" v-for="w in works", :key="w.n", :href="w.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + w.h")
                    | {{ w.n }}
            sui-grid-column
              .light-green
                sui-header(size="medium") Bestian是誰
                sui-list(ordered)
                  a(is="sui-list-item" v-for="b in bestians", :key="b.n", :href="b.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + b.h")
                    | {{ b.n }}
            sui-grid-column
              .light-yellow
                sui-header(size="medium") 學生半成品
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
      msg: '用Vue.js架網站',
      links: [
        {n: 'vue棋盤', h: 'http://goban.tw/#/see/vue/0/0'},
        {n: 'html棋盤', h: 'http://goban.tw/#/see/html/0/0'},
        {n: 'css棋盤', h: 'http://goban.tw/#/see/css/0/0'},
        {n: 'javascript棋盤', h: 'http://goban.tw/#/see/javascript/0/0'},
        {n: 'hack with bestian', h: 'https://www.github.com/bestian/hack'}
      ],
      works: [
        {n: '知識棋盤', h: 'http://goban.tw'},
        {n: '自由數學', h: 'http://math.alearn.org.tw'},
        {n: '自學地圖', h: 'http://map.alearn.org.tw'},
        {n: '自學2.0', h: 'http://we.alearn.org.tw'},
        {n: '認照片遊戲', h: 'http://elder.game.tw'},
        {n: '走失聯絡卡', h: 'http://imlost.bestian.tw'},
        {n: '自製的手機App', h: 'http://goban.tw/#/see/bestian_apps/0/0'},
        {n: '自製的其他網站', h: 'http://goban.tw/#/see/bestian_apps/1/0'}
      ],
      bestians: [
        {n: 'Be@github', h: 'https://www.github.com/bestian'},
        {n: 'Be@Facebook', h: 'https://www.facebook.com/bestiant'},
        {n: 'Be@LinkedIn', h: 'https://www.linkedin.com/in/bestian-tang-5a968843/'}
      ],
      students: [
        {n: 'Minecraft介紹網站', h: 'https://github.com/Hans-lee-2006/minecraft', a: 'Hans-lee-2006'},
        {n: '自製模型介紹網站', h: 'https://github.com/jinglunT/model', a: 'jinglunT'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
