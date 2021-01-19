<template lang="pug">
  .hello
    h1.white Bestian的作品
    .ui.form.container
      input(v-model = "key", placeholder="關鍵字查詢")
    br
    .ui.four.doubling.cards.container
      .ui.card(v-for="i in has(items, key)", :key="i.title")
        h2.ui.header {{i.title}}
        a.image(v-if="i.img", :href="i.href", target="_blank", rel="noopener noreferrer")
          img(:src="i.img")
        p.description {{i.description}}
        .ui.two.bottom.attached.fluid.buttons
          a.ui.huge.green.button(:href="i.href", target="_blank", rel="noopener noreferrer")
            i.globe.icon
            | 前往
          a.ui.huge.teal.button(:href="i.github", target="_blank", rel="noopener noreferrer")
            i.github.icon
            | 專案
</template>

<script>

export default {
  name: 'MyWork',
  props: ['likes'],
  methods: {
    has(items, k) {
      return items.filter((o) => (o.title + o.description).indexOf(k) > -1);
    },
  },
  data: () => ({
    key: '',
    items: [
      {
        from: new Date(2021, 0),
        title: '萌典',
        img: './img/moe.png',
        href: 'https://bestian.github.io/q-moedict',
        github: 'https://www.github.com/bestian/q-moedict',
        description:
          '萌典是教育部字典民間版，有許多不同的查詢功能，方便好用。',
      },
      {
        from: new Date(2020, 5),
        title: '自由數學',
        img: './img/freemath.png',
        href: 'https://math.alearn.org.tw',
        github: 'https://www.github.com/bestian/freemath/',
        description: '自由數學是自由的開放教材，有學習地圖和小學三年級到國中三年級中各個重要的數學單元的形成性教材，適合自學使用。',
      },
      {
        from: new Date(2019, 8),
        title: '知識棋盤',
        img: './img/goban.png',
        href: 'https://goban.tw/#/',
        github: 'https://www.github.com/g0v/goban/',
        description:
          '知識棋盤是網址匯集和分享的好工具，有無限的空間可以發揮。',
      },
      {
        from: new Date(2020, 6),
        title: '自學地圖',
        img: './img/automap.png',
        href: 'https://map.alearn.org.tw',
        github: 'https://www.github.com/3dw/automap/',
        description:
          '自學地圖是給自學家庭的入口頁，有許多資訊和諮詢專線的服務。',
      },
      {
        from: new Date(2020, 6),
        title: '自學地圖',
        img: './img/automap.png',
        href: 'https://map.alearn.org.tw',
        github: 'https://www.github.com/3dw/automap/',
        description:
          '自學地圖是給自學家庭的入口頁，有許多資訊和諮詢專線的服務。',
      },
      {
        from: new Date(2020, 6),
        title: '自主公民樸克牌',
        img: './img/poker.png',
        href: 'https://poker.bestian.tw',
        github: 'https://www.github.com/bestian/pokercard/',
        description:
          '自主公民樸克牌是用QR-Code做的樸克牌，可以讓使用者自訂52個連結並印出。',
      },
      {
        from: new Date(2020, 11),
        title: '認字遊戲',
        img: './img/moe.png',
        href: 'https://bestian.github.io/q-write',
        github: 'https://www.github.com/bestian/q-write/',
        description:
          '認字遊戲是給小朋友學習認字的工具，有多種遊戲模式，可自訂字庫。',
      },
      {
        from: new Date(2020, 11),
        title: '自由數學閃卡',
        img: './img/flash.png',
        href: 'https://bestian.github.io/q-flashcard',
        github: 'https://www.github.com/bestian/q-flashcard/',
        description:
          '閃卡是練習心算的工具，有多種功能，可以自訂數字範圍。',
      },
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input {
  width: 300px !important;
}

.white {
  color: white !important;
}

.card p {
  text-align: left;
  margin-top: 1em;
  margin-bottom: 4em;
  padding: 0 .5em;
}

h2 {
  margin: .3em 0 !important;
}

.ui.attached.buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>
