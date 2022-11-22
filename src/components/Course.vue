<template lang="pug">
  .hello
    .ui.container
      .ui.piled.segment.code(:class="{dark: dark}")
        router-link(to="/faq")
          img.float.left(src="/img/elf.png", alt="elf")
        sui-header(size="large") {{$t('想學寫網站嗎?')}}
        router-link(to="/flow")
          img.logo(src="../assets/logo.png")
        sui-header(size="large") {{$t('用Vue.js架網站吧')}}
          .sub.header.left {{$t('Vue是很適合初學者上手的一個前端框架，功能齊全，簡單好用。')}}
          .sub.header.left {{$t('Vue很簡潔，可以參考看看這個')}}
            a(href="https://jsbin.com/rahuhoj/edit?html,js,output", target="_blank") {{$t('99乘法表的範例')}}
            | {{$t('就會有個概念了。')}}
        br
        br
        sui-grid(:columns="4" stackable)
          sui-grid-row
            sui-grid-column
              .light-red.sh
                sui-header(size="medium") {{$t('資源匯整')}}
                sui-list(ordered)
                  a(is="sui-list-item" v-for="l in links", :key="l.n", :href="l.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + l.h")
                    | {{ l.n }}
            sui-grid-column
              .light-blue.sh
                sui-header(size="medium") {{$t('Bestian作品')}}
                sui-list(ordered)
                  a(is="sui-list-item" v-for="w in works", :key="w.n", :href="w.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + w.h")
                    | {{ w.n }}
            sui-grid-column
              .light-green.sh
                sui-header(size="medium") {{$t('(程式歷程')}}
                sui-list(ordered)
                  div {{$t('Bestian寫過純html+css+js的網站')}}
                    br
                    br
                    | {{$t('後來學習jQuery')}}
                    br
                    br
                    | {{$t('之後用AngularJS')}}
                    br
                    br
                    | {{$t('最後專注於Vue框架的應用上。")}}
                  a(is="sui-list-item" v-for="b in bestians", :key="b.n", :href="b.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + b.h")
                    | {{ b.n }}
            sui-grid-column
              .light-yellow.sh
                sui-header(size="medium") {{$t('學生檔案與作品')}}
                sui-list(ordered)
                  a(is="sui-list-item" v-for="s in students", :key="s.n", :href="s.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + s.h")
                    | {{ $t(s.n) }}
                    span(v-if="s.a") - by {{ $t(s.a) }}
</template>

<script>
export default {
  name: 'CourSe',
  metaInfo: {
    title: '課程說明',
  },
  props: ['likes', 'dark'],
  data() {
    return {
      links: [
        { n: 'vue', h: 'https://goban.tw/#/see/vue/0/0' },
        { n: 'html', h: 'https://goban.tw/#/see/html/0/0' },
        { n: 'css', h: 'https://goban.tw/#/see/css/0/0' },
        { n: 'javascript', h: 'https://goban.tw/#/see/javascript/0/0' },
      ],
      works: [
        // { n: '本網站', h: 'https://hack.bestian.tw' },
        { n: '自然美食DIY', h: 'https://food.bestian.tw' },
        { n: '自由數學', h: 'https://math.alearn.org.tw' },
        { n: '自學地圖', h: 'https://map.alearn.org.tw' },
        { n: '自學2.0', h: 'https://we.alearn.org.tw' },
        { n: '零時黑板', h: 'https://goban.tw' },
        { n: '認照片遊戲', h: 'https://www.elder.game.tw/#/' },
        { n: '自製的手機App', h: 'https://goban.tw/#/see/bestian_apps/0/0' },
        { n: '自製的其他網站', h: 'https://goban.tw/#/see/bestian_apps/1/0' },
      ],
      bestians: [
        { n: 'App開發小記', h: 'https://docs.google.com/document/d/1dDTbuP-U94GRfVV30jgGJMrA-eNy4JZsN40-jDuFwNs/edit#' },
        { n: 'Be@github', h: 'https://www.github.com/bestian' },
      ],
      students: [
        { n: 'Hans-lee-2006', h: 'https://www.github.com/hans-lee-2006/' },
        { n: 'Jinglunt', h: 'https://www.github.com/jinglunt/' },
        { n: 'Jungleft', h: 'https://www.github.com/jungleft/' },
        { n: 'Kingston0420', h: 'https://www.github.com/kingston0420/' },
        { n: 'Minecraft介紹網站', h: 'https://hans-lee-2006.github.io/minecraft/#/', a: 'Hans-lee-2006' },
        { n: '自製模型介紹網站', h: 'https://jinglunt.github.io/model/#/', a: 'jinglunT' },
        { n: 'BMI計算機', h: 'https:/bestian.github.io/bmi/#/', a: '共同創作' },
        { n: 'fb釣魚網站習作', h: 'https://hans-lee-2006.github.io/fb/#/', a: 'Hans-lee-2006' },
        { n: '3D迷宮遊戲', h: 'https://bestian.github.io/maze/#/', a: '共同創作' },
        { n: '射飛碟', h: 'https://bestian.github.io/vue_svg_game/#/', a: '共同創作' },
        { n: '個人網站', h: 'https://kingston0420.github.io/mywebsite/#/', a: 'Kingston0420' },
        { n: '個人網站', h: 'https://jungleft.github.io/jungho/', a: 'Jungleft' },
        { n: '抽卡小遊戲', h: 'https://kingston0420.github.io/dhgame/#/', a: 'Kingston0420' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
