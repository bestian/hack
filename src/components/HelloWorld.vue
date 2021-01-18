<template lang="pug">
  .hello
    .ui.container
      .ui.piled.segment.sunflower
        router-link(to="/course")
          img.logo(src="../assets/logo.png", alt="vue")
        sui-header(size="large") 歡迎學習寫網站
        h3 以一對1~2人的小規模視訊教學，量身打造合適的學習進程。
        p.left 激發主動創發的自學精神，培養「彷」、「創」、「改」的良好學習習慣。
          br
          | Vue.js是目前最夯的前端框架之一，簡捷、有力、架構清楚。
          br
          | 按
          router-link(to="/course")
            img.ui.mini.inline.image.haha(src="../assets/logo.png", alt="vue")
          | 可以跳到下一頁喔~
        h3 Vue簡介
        .ui.bulleted.list
          a.item(href="https://bestian.medium.com/vue%E7%B0%A1%E4%BB%8B%E4%B9%8B%E4%B8%80-4d57f8d1b3d1", target="_blank" rel="noopener noreferrer") Vue簡介一：迴圈
          a.item(href="https://bestian.medium.com/vue%E7%B0%A1%E4%BB%8B%E4%BA%8C-13a551d14f7f", target="_blank" rel="noopener noreferrer") Vue簡介二：樣式綁定
          a.item(href="https://bestian.medium.com/vue%E7%B0%A1%E4%BB%8B%E4%B8%89-1e3167063a67", target="_blank" rel="noopener noreferrer") Vue簡介三：雙向資料綁定
    h3.white 創發軌跡：
    Timeline(:timeline-items="timelineItems", :message-when-no-items="messageWhenNoItems")

</template>

<script>
import Timeline from 'timeline-vuejs';

export default {
  name: 'HelloWorld',
  components: {
    Timeline,
  },
  props: ['likes'],
  data: () => ({
    messageWhenNoItems: '歡迎學習寫網站',
    timelineItems: [
      {
        from: new Date(2021, 0),
        title: '萌典、自主公民樸克牌',
        description:
          '<img class="history" src="./img/moe.png"/>這個月重新構造了萌典、自主公民樸克牌<br/><a href = "https://bestian.github.io/q-moedict" target="blank" rel="noopener noreferrer">https://bestian.github.io/q-moedict</a><br/><a href = "https://poker.bestian.tw" target="blank" rel="noopener noreferrer">https://poker.bestian.tw</a>',
      },
      {
        from: new Date(2020, 11),
        title: '認字遊戲、閃卡',
        description:
          '<img class="history" src="./img/flash.png"/>這個月做了認字遊戲，還有更新了自由數學閃卡<br/><a href = "https://bestian.github.io/q-write" target="blank" rel="noopener noreferrer">https://bestian.github.io/q-write</a><br/><a href = "https://bestian.github.io/q-flashcard" target="blank" rel="noopener noreferrer">https://bestian.github.io/q-flashcard</a>',
      },
      {
        from: new Date(2020, 9),
        title: '射飛碟',
        description:
          '<img class="history" src="./img/ufo.png"/>這個月做了射飛碟的小遊戲<br/><a href = "https://bestian.github.io/vue_svg_game" target="blank" rel="noopener noreferrer">https://bestian.github.io/vue_svg_game</a>',
      },
      {
        from: new Date(2020, 8),
        title: '迷宮遊戲',
        description:
          '<img class="history" src="./img/maze.png"/>這個月做了迷宮遊戲<br/><a href = "https://bestian.github.io/maze" target="blank" rel="noopener noreferrer">https://bestian.github.io/maze</a>',
      },
      {
        from: new Date(2020, 7),
        title: '我愛玩學校',
        description:
          '<img class="history" src="./img/ilove.png"/>這個月做了我愛玩學校網站<br/><a href = "https://3dw.github.io/ilove" target="blank" rel="noopener noreferrer">https://3dw.github.io/ilove</a>',
      },
      {
        from: new Date(2020, 6),
        title: '自學地圖',
        description:
          '<img class="history" src="./img/automap.png"/>這個月更新了自學地圖<br/><a href = "https://map.alearn.org.tw" target="blank" rel="noopener noreferrer">https://map.alearn.org.tw</a>',
      },
      {
        from: new Date(2020, 5),
        title: '自由數學',
        description:
          '<img class="history" src="./img/freemath.png"/>這個月更新了自由數學<br/><a href = "https://math.alearn.org.tw" target="blank" rel="noopener noreferrer">https://math.alearn.org.tw</a>',
      },
      {
        from: new Date(2020, 3),
        title: 'BMI試算機',
        description:
          '<img class="history" src="./img/bmi.png"/>這個月做了BMI試算機<br/><a href = "https://bestian.github.io/bmi" target="blank" rel="noopener noreferrer">https://bestian.github.io/bmi</a>',
      },
      {
        from: new Date(2020, 2),
        title: '迷路聯絡卡',
        description:
          '<img class="history" src="./img/lost.png"/>這個月做了迷路聯絡卡<br/><a href = "http://imlost.elder.game.tw" target="blank" rel="noopener noreferrer">http://imlost.elder.game.tw</a>',
      },
      {
        from: new Date(2019, 8),
        title: '知識棋盤',
        description:
          '<img class="history" src="./img/goban.png"/>這個月更新了知識棋盤<br/><a href = "https://goban.tw/#/" target="blank" rel="noopener noreferrer">https://goban.tw/#/</a>',
      },
      {
        from: new Date(2018),
        title: '更多',
        description:
          '更多記錄。請參考Github<br/><a href = "https://github.com/bestian" target="blank" rel="noopener noreferrer">https://github.com/bestian</a>',
      },
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ui.list {
  display: block;
  text-align: left;
  margin-left: 33vw !important;
}

.left {
  text-align: left;
}

.timeline {
  max-width: 720px !important;
  color: white !important;
  margin: 0 auto;
}

@media screen and (max-width: 420px) {
  .timeline {
    position: relative;
    left: -2em;
  }
  .ui.list {
    margin-left: 15vw !important;
  }
  .sunflower p {
    margin-left: 2vw !important;
  }
}

.white {
  color: white;
}

.sunflower p {
  margin-left: 15vw;
}

</style>
