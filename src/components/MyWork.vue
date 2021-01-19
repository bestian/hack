<template lang="pug">
  .hello
    h1.white Bestian的作品
    .ui.cards.container
      .ui.card(v-for="i in items", :key="i.title")
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
  data: () => ({
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
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
