<template lang="pug">
  .hello
    .ui.container
      .ui.piled.segment.sunflower(:class="{dark: dark}")
        // a(href="https://p.ecpay.com.tw/25CE4A0")
          | 點此贊助Bestian1000元
          img(width="100" height="100" src="../assets/綠界pay.png")
        router-link(to="/faq")
          img.float.left(src="/img/elf.png", alt="elf", v-show="!hover", @mouseover="hover=true", @mouseout="hover=false")
          img.float.left(src="/img/be.jpeg", alt="bestian", v-show="hover", @mouseover="hover=true", @mouseout="hover=false")
        sui-header(size="large")
          span.fat-only 和Bestian
          span 一起寫網站
        iframe(src="https://docs.google.com/presentation/d/e/2PACX-1vRpJWbsarwXfhZlImC_C6YYBuwb5uuogGiFJ5oLr2_SJhdZlTx_goz2UY0KFl7LhgIXPDaIaFXQdsOm/embed?start=true&loop=true&delayms=2500" frameborder="0",width="100%", height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true")
        h3 小規模視訊教學，量身打造合適的學習進程。
        p.left 激發主動創發的自學精神，培養「摹彷」、「創作」、「改良」的良好學習習慣。
          br
          | Vue.js是目前最夯的前端框架，簡捷、有力、架構清楚。
          br
          | 按
          router-link(to="/course")
            img.ui.mini.inline.image.turn(src="../assets/logo.png", alt="vue")
          | 可以跳到下一頁喔~
        iframe(src="https://app.sli.do/event/1swgLtupKaAWYh1TfMrhHc", width="600", height="350")
        .ui.grid.container
          .ui.two.column.stackable.row
            .sh.column
              router-link.d(to="/work")
                img.be(src="/img/be.jpeg", alt="bestian", v-show="!hover", @mouseover="hover=true", @mouseout="hover=false")
                img.be(src="/img/elf.png", alt="elf", v-show="hover", @mouseover="hover=true", @mouseout="hover=false")
                br
                | Bestian的作品
            .sh.column.down
              router-link.d(to="/chat")
                img.be(src="/img/board.png", alt="board")
                br
                | 留言版
            .sh.column.down
              router-link.d(to="/quiz")
                img.be(src="/img/quiz123.png", alt="quiz")
                br
                | 小測驗
        h2
          router-link(to="/course")
            img.logo(src="../assets/logo.png", alt="vue")
          | Vue簡介
        .ui.row
          .light-blue.column
            .ui.bulleted.list
              a.item(href="https://bestian.medium.com/vue%E7%B0%A1%E4%BB%8B%E4%B9%8B%E4%B8%80-4d57f8d1b3d1", target="_blank" rel="noopener noreferrer")
                router-link(to="/course")
                  img.mini(src="../assets/logo.png", alt="vue")
                | Vue簡介一：迴圈
              a.item(href="https://bestian.medium.com/vue%E7%B0%A1%E4%BB%8B%E4%BA%8C-13a551d14f7f", target="_blank" rel="noopener noreferrer")
                router-link(to="/course")
                  img.mini(src="../assets/logo.png", alt="vue")
                | Vue簡介二：樣式綁定
              a.item(href="https://bestian.medium.com/vue%E7%B0%A1%E4%BB%8B%E4%B8%89-1e3167063a67", target="_blank" rel="noopener noreferrer")
                router-link(to="/course")
                  img.mini(src="../assets/logo.png", alt="vue")
                | Vue簡介三：雙向資料綁定
              a.item(href="https://vuejs.org/", target="_blank" rel="noopener noreferrer")
                router-link(to="/course")
                  img.mini(src="../assets/logo.png", alt="vue")
                | Vue官網
              a.item(href="https://www.tenlong.com.tw/products/9789864345687", target="_blank" rel="noopener noreferrer")
                router-link(to="/course")
                  img.mini(src="../assets/logo.png", alt="vue")
                | 參考書《重新認識 Vue.js》
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
  metaInfo: {
    title: '歡迎',
  },
  props: ['likes', 'dark'],
  data: () => ({
    hover: false,
    messageWhenNoItems: '歡迎學習寫網站',
    timelineItems: [
      {
        from: new Date(2021, 2),
        title: '質因數分解、畢氏三組數',
        description:
          '<img class="history" src="./img/prime.png" alt="moe"/>這個月構造了質因數分解、畢氏三組數<br/><a href = "https://bestian.github.io/prime/" target="blank" rel="noopener noreferrer">https://bestian.github.io/prime/</a><br/>畢氏三組數產生器也很有趣。<a href = "https://bestian.github.io/pytha/" target="blank" rel="noopener noreferrer">https://bestian.github.io/pytha/</a>',
      },
      {
        from: new Date(2021, 1),
        title: '浩克打怪',
        description:
          '<img class="history" src="./img/hulk.png" alt="hulk"/>這個月創建了浩克打怪的小遊戲。<a href = "https://bestian.github.io/hulk/" target="blank" rel="noopener noreferrer">https://bestian.github.io/hulk/</a>',
      },
      {
        from: new Date(2021, 0),
        title: '萌典、自主公民樸克牌',
        description:
          '<img class="history" src="./img/moe.png" alt="moe"/>這個月重新構造了萌典、自主公民樸克牌<br/>萌典是教育部字典民間版，有許多不同的查詢功能，方便好用。<a href = "https://bestian.github.io/q-moedict" target="blank" rel="noopener noreferrer">https://bestian.github.io/q-moedict</a><br/>自主公民樸克牌是用QR-Code做的樸克牌，可以讓使用者自訂52個連結並印出。<a href = "https://poker.bestian.tw" target="blank" rel="noopener noreferrer">https://poker.bestian.tw</a>',
      },
      {
        from: new Date(2020, 11),
        title: '認字遊戲、閃卡',
        description:
          '<img class="history" src="./img/flash.png" alt="flash"/>這個月做了認字遊戲，還有更新了自由數學閃卡<br/>認字遊戲是給小朋友學習認字的工具，有多種遊戲模式，可自訂字庫。<a href = "https://bestian.github.io/q-write" target="blank" rel="noopener noreferrer">https://bestian.github.io/q-write</a><br/>閃卡是練習心算的工具，有多種功能，可以自訂數字範圍。<a href = "https://bestian.github.io/q-flashcard" target="blank" rel="noopener noreferrer">https://bestian.github.io/q-flashcard</a>',
      },
      {
        from: new Date(2020, 9),
        title: '射飛碟',
        description:
          '<img class="history" src="./img/ufo.png" alt="ufo"/>這個月做了射飛碟的小遊戲<br/>射飛碟遊戲會有很多飛碟從上方出現往下移動，要在它們落地前擊落它們。<a href = "https://bestian.github.io/vue_svg_game" target="blank" rel="noopener noreferrer">https://bestian.github.io/vue_svg_game</a>',
      },
      {
        from: new Date(2020, 8),
        title: '迷宮遊戲',
        description:
          '<img class="history" src="./img/maze.png" alt="maze"/>這個月做了迷宮遊戲<br/>迷宮遊戲是用3D模組做的迷宮，有三個關卡，可以開啟神模式就能穿牆。<a href = "https://bestian.github.io/maze" target="blank" rel="noopener noreferrer">https://bestian.github.io/maze</a>',
      },
      {
        from: new Date(2020, 7),
        title: '我愛玩學校',
        description:
          '<img class="history" src="./img/ilove.png" alt="ilove"/>這個月做了我愛玩學校網站<br/>我愛玩學校是一個很特別的學習團體，時常辦一些有趣的活動，為新小孩創造新經驗。<a href = "https://3dw.github.io/ilove" target="blank" rel="noopener noreferrer">https://3dw.github.io/ilove</a>',
      },
      {
        from: new Date(2020, 6),
        title: '自學地圖',
        description:
          '<img class="history" src="./img/automap.png" alt="automap"/>這個月更新了自學地圖<br/>自學地圖是給自學家庭的入口頁，有許多資訊和諮詢專線的服務。<a href = "https://map.alearn.org.tw" target="blank" rel="noopener noreferrer">https://map.alearn.org.tw</a>',
      },
      {
        from: new Date(2020, 5),
        title: '自由數學',
        description:
          '<img class="history" src="./img/freemath.png" alt="freemath"/>這個月更新了自由數學<br/>自由數學是自由的開放教材，有學習地圖和小學三年級到國中三年級中各個重要的數學單元的形成性教材，適合自學使用。<a href = "https://math.alearn.org.tw" target="blank" rel="noopener noreferrer">https://math.alearn.org.tw</a>',
      },
      {
        from: new Date(2020, 3),
        title: 'BMI試算機',
        description:
          '<img class="history" src="./img/bmi.png" alt="bmi"/>這個月做了BMI試算機<br/>BMI試算機可以幫你做體重的試算，具有體重控制的輔助作用。<a href = "https://bestian.github.io/bmi" target="blank" rel="noopener noreferrer">https://bestian.github.io/bmi</a>',
      },
      {
        from: new Date(2020, 2),
        title: '迷路聯絡卡',
        description:
          '<img class="history" src="./img/lost.png" alt="lost"/>這個月做了迷路聯絡卡<br/>迷路聯絡卡是給老人或小孩使用的，在迷路時可以展示出主要照顧者的聯絡方式。<a href = "http://imlost.elder.game.tw" target="blank" rel="noopener noreferrer">http://imlost.elder.game.tw</a>',
      },
      {
        from: new Date(2019, 8),
        title: '零時黑板',
        description:
          '<img class="history" src="./img/goban.png" alt="goban"/>這個月更新了零時黑板<br/>零時黑板是網址匯集和分享的好工具，有無限的空間可以發揮。<a href = "https://goban.tw/#/" target="blank" rel="noopener noreferrer">https://goban.tw/#/</a>',
      },
      {
        from: new Date(2019, 0),
        title: '更多',
        description:
          '<img class="history" src="https://avatars1.githubusercontent.com/u/109048?s=460&u=3df3fdbf63cf583fe2675156f62624124fdcca9a&v=4" alt="github"/>更多記錄。請參考我的Github頁面。<br/><a href = "https://github.com/bestian" target="blank" rel="noopener noreferrer">https://github.com/bestian</a>',
      },
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main {
  padding: 0;
  max-width: 50vw;
}

.ui.list {
  display: block;
  text-align: left;
  margin-left: 33vw !important;
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

.be {
  height: 4em;
  border-radius: 30px;
}

.white {
  color: white;
}

.sunflower p {
  margin-left: 15vw;
}

.column .ui.list {
  height: 8em;
  min-height: 0;
}

.column.down {
  padding-top: 2em;
}

.mini {
  height: .8em;
  margin: 0 .2em;
}

a.d {
  color: #00c;
}
</style>
