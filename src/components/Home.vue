<template lang="pug">
  .hello
    .ui.container
      .ui.segment
        h2
          i.thumbs.up.icon
          | Bestian {{$t('\'s_Web_Workshop')}}
        h3
          img.logo(src="/logo.png")
          br
          | {{$t('slogan')}}
        .ui.two.stackable.cards
          .ui.card
            .image
              i.google.icon
            .description
              h3.ui.header Google Site設計
                .sub.header 作品集
              .ui.bulleted.list
                a.item(v-for="s in gsites", :key="s.n", :href="s.h", target="_blank", rel="noopener noreferrer")
                  img(:src="'https://www.google.com/s2/favicons?domain=' + s.h")
                  | {{s.n}}
          .ui.card
            .image
              i.globe.icon
            .description
              h3.ui.header 網路App設計
                .sub.header 作品集
              .ui.bulleted.list
                a.item(v-for="s in wsites", :key="s.n", :href="s.h", target="_blank", rel="noopener noreferrer")
                  img(:src="'https://www.google.com/s2/favicons?domain=' + s.h")
                  | {{s.n}} ({{s.d}})
          .ui.card
            .image
              i.mobile.icon
            .description
              h3.ui.header 手機App設計
                .sub.header 作品集
              .ui.bulleted.list
                a.item(v-for="s in msites", :key="s.n", :href="s.h", target="_blank", rel="noopener noreferrer")
                  img(:src="'https://www.google.com/s2/favicons?domain=' + s.h")
                  | {{s.n}} ({{s.d}})
          .ui.card
            .image
              i.edit.icon
            .description
              h3.ui.header 樣品
                .sub.header 樣品的css是用semantic UI製作，但正式版本的css可以自行增修
              .ui.bulleted.list
                a.item(href="https://bestian.github.io/demo1/", target="_blank", rel="noopener noreferrer")
                  img(src="https://www.google.com/s2/favicons?domain=https://bestian.github.io/demo1/")
                  | 公司形象RWD網站
                a.item(href="https://bestian.github.io/pet-demo/", target="_blank", rel="noopener noreferrer")
                  img(src="https://www.google.com/s2/favicons?domain=https://bestian.github.io/pet-demo/")
                  | 寵物網站Demo
                a.item(href="https://weave.pages.dev/", target="_blank", rel="noopener noreferrer")
                  img(src="https://www.google.com/s2/favicons?domain=https://weave.pages.dev/")
                  | 紡織動畫
        h2 聯絡方式
        h3
          a(href="mailto:bestian@gmail.com")
            img.is(src="../assets/gmail.png")
            | besian@gmail.com
        h2 Github主頁
        .ui.divider
        h3
          a(href="https://www.github.com/bestian/", target="_blank", rel="noopener noreferrer")
            img.ic(src="https://avatars.githubusercontent.com/u/109048?v=4")
            | besian@github.com
</template>

<script>
import Timeline from 'timeline-vuejs';

export default {
  name: 'HelloWorld',
  components: {
    Timeline,
  },
  metaInfo: {
    title: '歡迎',
  },
  props: ['likes', 'dark'],
  data: () => ({
    gsites: [
      { n: '自主學習促進會', h: 'https://sites.google.com/view/autoalearn' },
      { n: '台東永明佛寺', h: 'https://sites.google.com/view/https://sites.google.com/view/innerpurelight/%E9%A6%96%E9%A0%81' },
    ],
    wsites: [
      { n: 'Blockly-HTML', d: '用拼圖寫網頁', h: 'https://bestian.github.io/blockly-html/' },
      { n: '自由數學', d: '數學開放教材和小工具', h: 'https://math.alearn.org.tw/' },
      { n: '萌典', d: '教育部字典民間版', h: 'https://bestian.github.io/q-moedict/' },
      { n: '自學地圖', d: '自學家庭入口網站', h: 'https://map.alearn.org.tw/' },
      { n: '自學2.0', d: '自學社群互認地圖', h: 'https://bestian.github.io/q-moedict/' },
      { n: '念佛號', d: '佛號共修登錄網站', h: 'https://bestian.github.io/number/' },
      { n: '佛門咒文集', d: '咒文意譯查詢', h: 'https://bestian.github.io/q-spell/' },
      { n: '李雅卿的隨緣自強', d: '個人網站', h: 'https://life3.pages.dev/' },
    ],
    msites: [
      { n: '念佛號', d: '佛號共修App', h: 'https://bestian.github.io/number/' },
      { n: '佛門咒文集', d: '咒文意譯查詢App', h: 'https://bestian.github.io/q-spell/' },
      { n: '萌典App', d: '教育部字典App', h: 'https://play.google.com/store/apps/details?id=org.moedict.app' },
      { n: '認字遊戲', d: '中文字學習App', h: 'https://play.google.com/store/apps/details?id=tw.bestian.word' },
      { n: '射飛碟', d: '射擊遊戲App', h: 'https://bestian.github.io/vue_svg_game/' },
      { n: '因數與倍數', d: '數學遊戲App', h: 'https://play.google.com/store/apps/details?id=tw.bestian.colormath' },
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .is {
    width: 50px;
  }
  .ic {
    width: 50px;
    border-radius: 50%;
  }

  .ui.bulleted.list {
    text-align: left;
  }

</style>
