<template lang="pug">
  .hello
    .ui.container
      .ui.segment
        h2 {{$t('News')}}
        .ui.divided.list
          .item(v-for="n in rvrv(news)", :key="n.md")
            | {{n.date}}:
            vue-simple-markdown(:source="$t(n.md)")
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
              h3.ui.header {{$t('Google_Sites_Designs')}}
                .sub.header {{$t('works')}}
              .ui.bulleted.list
                a.item(v-for="s in gsites", :key="s.n", :href="s.h", target="_blank", rel="noopener noreferrer")
                  img(:src="'https://www.google.com/s2/favicons?domain=' + s.h")
                  | {{$t(s.n)}}
          .ui.card
            .image
              i.globe.icon
            .description
              h3.ui.header {{$t('Web_App_Designs')}}
                .sub.header {{$t('works')}}
              .ui.bulleted.list
                a.item(v-for="s in wsites", :key="s.n", :href="s.h", target="_blank", rel="noopener noreferrer")
                  img(:src="'https://www.google.com/s2/favicons?domain=' + s.h")
                  | {{$t(s.n)}} ({{$t(s.d)}})
          .ui.card
            .image
              i.mobile.icon
            .description
              h3.ui.header {{$t('Moblie_App_Designs')}}
                .sub.header {{$t('works')}}
              .ui.bulleted.list
                a.item(v-for="s in msites", :key="s.n", :href="s.h", target="_blank", rel="noopener noreferrer")
                  img(:src="'https://www.google.com/s2/favicons?domain=' + s.h")
                  | {{$t(s.n)}} {{$t(s.d)}}
          .ui.card
            .image
              i.edit.icon
            .description
              h3.ui.header {{$t('Demo')}}
                .sub.header {{$t('Demo_Intro')}}
              .ui.bulleted.list
                a.item(href="https://bestian.github.io/demo1/", target="_blank", rel="noopener noreferrer")
                  img(src="https://www.google.com/s2/favicons?domain=https://bestian.github.io/demo1/")
                  | {{$t('公司形象RWD網站')}}
                a.item(href="https://bestian.github.io/pet-demo/", target="_blank", rel="noopener noreferrer")
                  img(src="https://www.google.com/s2/favicons?domain=https://bestian.github.io/pet-demo/")
                  | {{$t('寵物網站Demo')}}
                a.item(href="https://weave.pages.dev/", target="_blank", rel="noopener noreferrer")
                  img(src="https://www.google.com/s2/favicons?domain=https://weave.pages.dev/")
                  | {{$t('紡織動畫')}}
        h2 {{$t('Connect_Me')}}
        h3
          a(href="mailto:bestian@gmail.com")
            img.is(src="../assets/gmail.png")
            | besian@gmail.com
        h2 {{$t('Github_Profile')}}
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
  metaInfo () { 
    return {
      title: this.$t('title')
    }
  },
  props: ['likes', 'dark', 'news'],
  data: () => ({
    gsites: [
      { n: '自主學習促進會', h: 'https://sites.google.com/view/autoalearn' },
      { n: '台東永明佛寺', h: 'https://sites.google.com/view/https://sites.google.com/view/innerpurelight/%E9%A6%96%E9%A0%81' },
    ],
    wsites: [
      { n: 'ET科技教育', d: '線上課程平台', h: 'https://etcoding.tech/' },
      { n: 'Blockly-HTML', d: '用拼圖寫網頁', h: 'https://bestian.github.io/blockly-html/' },
      { n: '自由數學', d: '數學開放教材和小工具', h: 'https://math.alearn.org.tw/' },
      { n: '萌典', d: '教育部字典民間版', h: 'https://bestian.github.io/q-moedict/' },
      { n: '自學地圖', d: '自學家庭入口網站', h: 'https://map.alearn.org.tw/' },
      { n: '自主學習2.0', d: '自學社群互認地圖', h: 'https://bestian.github.io/q-moedict/' },
      { n: '念佛號', d: '佛號共修登錄網站', h: 'https://bestian.github.io/number/' },
      { n: '佛門咒文集', d: '咒文意譯查詢', h: 'https://bestian.github.io/q-spell/' },
      { n: '李雅卿的隨緣自強', d: '個人網站', h: 'https://life3.pages.dev/' },
    ],
    msites: [
      { n: '佛門咒文集', d: '咒文意譯查詢App', h: 'https://bestian.github.io/q-spell/' },
      { n: '萌典App', d: '教育部字典App', h: 'https://play.google.com/store/apps/details?id=org.moedict.app' },
      { n: '認字遊戲', d: '中文字學習App', h: 'https://play.google.com/store/apps/details?id=tw.bestian.word' },
      { n: '射飛碟', d: '射擊遊戲App', h: 'https://bestian.github.io/vue_svg_game/' },
      { n: '因數與倍數', d: '數學遊戲App', h: 'https://play.google.com/store/apps/details?id=tw.bestian.colormath' },
    ],
  }),
  mounted () {
    console.log(this.$route.params.lang)
    if (this.$route.params.lang) {
      this.$emit('changeLang', this.$route.params.lang)
    }
  },
  methods: {
    rvrv (list) {
      if (!list) {
        return []
      } else {
        let arr = [...list]
        arr.reverse()
        return arr.slice(0,3)
      }
    }
  }
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
