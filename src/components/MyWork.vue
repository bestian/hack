<template lang="pug">
  .hello
    router-link(to="/")
      img.small(src="/img/be.jpg", alt="bestian")
    h1.white Bestian的作品
    .ui.form.container
      .ui.left.icon.input
        input(type="text",v-model = "key", placeholder="關鍵字查詢", clearable, @click="key=''")
        i.search.icon
      .inline.fields
        label 顯示模式：
        .field
          .ui.radio.checkbox
            input(type="radio" ,v-model="mode", name="mode", checked="checked", value="list")
            label 清單
          .ui.radio.checkbox
            input(type="radio",v-model="mode", name="mode",value="cards")
            label 卡片
          br
          .ui.radio.checkbox
            input(type="radio",v-model="mode", name="mode",value="small")
            label 小清單
          .ui.radio.checkbox
            input(type="radio",v-model="mode", name="mode",value="frame")
            label 預覽
          br
          .ui.radio.checkbox
            input(type="radio",v-model="mode", name="mode",value="block")
            label 方塊
          .ui.radio.checkbox
            input(type="radio",v-model="mode", name="mode",value="horse")
            label 跑馬
    br
    .ui.four.doubling.stackable.cards.container(v-if = "mode == 'cards'")
      .ui.card(v-for="(i, idx) in has(items, key)", :key="i.title")
        .ui.top.right.attached.label
          a.tag(v-for = "t in i.tags", :key="t", @click="key = t") {{t}}
        h2.ui.header {{idx + 1}}：{{i.title}}
        a.image(v-if="i.img", :href="i.href", target="_blank", rel="noopener noreferrer")
          img(:src="i.img")
        .ui.divider
        p.description {{i.description}}
        .ui.two.bottom.attached.fluid.buttons
          a.ui.huge.green.button(:href="i.href", target="_blank", rel="noopener noreferrer")
            i.globe.icon
            | 前往
          a.ui.huge.teal.button(:href="i.github", target="_blank", rel="noopener noreferrer")
            i.github.icon
            | 專案
    .ui.divided.list.container(v-if = "mode == 'list'")
      .item(v-for="(i, idx) in has(items, key)", :key="i.title")
        h2.white {{idx + 1}}：{{i.title}}
        a.ui.avatar(v-if="i.img", :href="i.href", target="_blank", rel="noopener noreferrer")
          img(:src="i.img")
        p.description {{i.description}}
          .ui.float.right.buttons
            a.ui.small.green.button(:href="i.href", target="_blank", rel="noopener noreferrer")
              i.globe.icon
              | 前往
            a.ui.small.teal.button(:href="i.github", target="_blank", rel="noopener noreferrer")
              i.github.icon
              | 專案
    .ui.divided.list.container(v-if = "mode == 'small'")
      .item(v-for="(i, idx) in has(items, key)", :key="i.title")
        a.ui.mini.avatar(v-if="i.img", :href="i.href", target="_blank", rel="noopener noreferrer")
          img(:src="i.img")
        p.description {{idx + 1}}、{{i.title}}： {{i.description}}
          .ui.float.right.buttons
            a.ui.small.green.button(:href="i.href", target="_blank", rel="noopener noreferrer")
              i.globe.icon
              | 前往
            a.ui.small.teal.button(:href="i.github", target="_blank", rel="noopener noreferrer")
              i.github.icon
              | 專案
    .ui.grid(v-if = "mode == 'frame'")
      .ui.row(v-for="(i, idx) in has(items, key)", :key="i.title")
        .four.wide.column
          a.ui.mini.avatar(v-if="i.img", :href="i.href", target="_blank", rel="noopener noreferrer")
            img(:src="i.img")
          p.description {{idx + 1}}、{{i.title}}： {{i.description}}
        .twelve.wide.column
          iframe(width="90%", height="420" :src = "i.href")
    .ui.segment.container(v-if = "mode == 'block'")
      a.block(v-for="(i, idx) in has(items, key)", :key="i.title", :href="i.href", target="_blank", rel="noopener noreferrer")
        img(:src="i.img", :title = "idx + '、' + i.title + '：' + i.description", :alt = "i.title")
    .ui.segment.container(v-if = "mode == 'horse'")
      .ui.card.fixed(@click="next()", :style="{left: left + 'px', top: top + 'px'}")
        .ui.top.right.attached.label
          a.tag(v-for = "t in items[idx].tags", :key="t", @click="key = t") {{t}}
        h2.ui.header {{idx + 1}}：{{items[idx].title}}
        a.image(v-if="items[idx].img", :href="items[idx].href", target="_blank", rel="noopener noreferrer")
          img(:src="items[idx].img")
        .ui.divider
        p.description {{items[idx].description}}
        .ui.two.bottom.attached.fluid.buttons
          a.ui.huge.green.button(:href="items[idx].href", target="_blank", rel="noopener noreferrer")
            i.globe.icon
            | 前往
          a.ui.huge.teal.button(:href="items[idx].github", target="_blank", rel="noopener noreferrer")
            i.github.icon
            | 專案
</template>

<script>

export default {
  name: 'MyWork',
  props: ['likes'],
  metaInfo: {
    title: '作品集',
  },
  methods: {
    has(items, k) {
      return items.filter((o) => (o.title + o.description + o.tags.join('')).indexOf(k) > -1);
    },
    go() {
      this.index += 1;
      if (this.index >= this.items.length) {
        this.index = 0;
      }
      this.$forceUpdate();
    },
    next() {
      this.idx += 1;
      if (this.idx === this.items.length) {
        this.idx = 0;
      }
    },
    move() {
      this.top += 1 * this.dir2;
      this.left += 1 * this.dir;
      if (this.left === window.innerWidth - 300 || this.left === 0) {
        this.dir *= -1;
        this.next();
      }
      if (this.top === window.innerHeight - 200 || this.top === 0) {
        this.dir2 *= -1;
        this.next();
      }
    },
  },
  mounted() {
    setInterval(this.go, 2000);
    setInterval(this.move, 15);
  },
  data: () => ({
    index: 0,
    idx: 0,
    top: 0,
    left: 0,
    dir: 1,
    dir2: 1,
    mode: 'list',
    key: '',
    items: [
      {
        from: new Date(2021, 0),
        title: '萌典',
        tags: ['中文', '字典', 'App'],
        img: './img/moe.png',
        href: 'https://bestian.github.io/q-moedict',
        github: 'https://www.github.com/bestian/q-moedict',
        description:
          '萌典是教育部字典民間版，有許多不同的查詢功能，方便好用。',
      },
      {
        from: new Date(2020, 5),
        title: '自由數學',
        tags: ['數學', '教材', '自學'],
        img: './img/freemath.png',
        href: 'https://math.alearn.org.tw',
        github: 'https://www.github.com/bestian/freemath/',
        description: '自由數學是自由的開放教材，有學習地圖和小學三年級到國中三年級中各個重要的數學單元的形成性教材，適合自學使用。',
      },
      {
        from: new Date(2019, 8),
        title: '零時黑板',
        tags: ['教材', '知識', '自學'],
        img: './img/goban.png',
        href: 'https://goban.tw/#/',
        github: 'https://www.github.com/g0v/goban/',
        description:
          '零時黑板是網址匯集和分享的好工具，有無限的空間可以發揮。',
      },
      {
        from: new Date(2020, 6),
        title: '自學地圖',
        tags: ['自學', '入口', '諮詢'],
        img: './img/automap.png',
        href: 'https://map.alearn.org.tw',
        github: 'https://www.github.com/3dw/automap/',
        description:
          '自學地圖是給自學家庭的入口頁，有許多資訊和諮詢專線的服務。',
      },
      {
        from: new Date(2020, 6),
        title: '自學2.0',
        tags: ['自學', '交友', '地圖'],
        img: './img/auto20.png',
        href: 'https://we.alearn.org.tw',
        github: 'https://www.github.com/3dw/auto20/',
        description:
          '自學2.0是一個交友網站，大家可以各自升起互助旗，程式會以地圖和列表的方式呈現，方便查詢。',
      },
      {
        from: new Date(2020, 6),
        title: '自主公民樸克牌',
        tags: ['知識', 'QR碼', '樸克牌'],
        img: './img/poker.png',
        href: 'https://poker.bestian.tw',
        github: 'https://www.github.com/bestian/pokercard/',
        description:
          '自主公民樸克牌是用QR-Code做的樸克牌，可以讓使用者自訂52個連結並印出。',
      },
      {
        from: new Date(2020, 11),
        title: '認字遊戲',
        tags: ['中文', '認字', '遊戲'],
        img: 'https://www.moedict.tw/%E5%AD%97.png',
        href: 'https://3dw.github.io/q-words/',
        github: 'https://www.github.com/3dw/q-word/',
        description:
          '認字遊戲是給小朋友學習認字的工具，有多種遊戲模式，可自訂字庫。',
      },
      {
        from: new Date(2020, 11),
        title: '自由數學閃卡',
        tags: ['數學', '心算', '遊戲'],
        img: './img/flash.png',
        href: 'https://bestian.github.io/q-flashcard',
        github: 'https://www.github.com/bestian/q-flashcard/',
        description:
          '閃卡是練習心算的工具，有多種功能，可以自訂數字範圍。',
      },
      {
        from: new Date(2019, 11),
        title: '認照片遊戲',
        tags: ['老人', '認知', '遊戲'],
        img: './img/eldergame.png',
        href: 'https://www.elder.game.tw/#/',
        github: 'https://github.com/bestian/elder/',
        description:
          '您家中有年紀大的長輩嗎？作者最初是為了自己的外婆，寫了認照片遊戲，提供娛樂與刺激。目前提供4種認照片遊戲，讓您輸入自己家族成員的照片，幫助長輩記得大家。',
      },
      {
        from: new Date(2020, 2),
        title: '迷路聯絡卡',
        tags: ['老人', '幼兒', '列印'],
        img: './img/lost.png',
        href: 'https://imlost.elder.game.tw',
        github: 'https://www.github.com/bestian/imlost',
        description:
          '迷路聯絡卡是給老人或小孩使用的，在迷路時可以展示出主要照顧者的聯絡方式。',
      },
      {
        from: new Date(2019, 2),
        title: '公民記者證',
        tags: ['公民', '記者', '列印'],
        img: './img/reporter.png',
        href: 'https://g0v.github.io/reporter/',
        github: 'https://www.github.com/g0v/reporter/',
        description:
          '公民記者證產生器可以讓使用者上傳自己的照片和名字，產生出專屬 的公民記者證，再列印下來到社運現場採訪。',
      },
      {
        from: new Date(2020, 9),
        title: '射飛碟',
        tags: ['SVG', '遊戲'],
        img: './img/ufo.png',
        href: 'https://bestian.github.io/vue_svg_game/',
        github: 'https://www.github.com/bestian/vue_svg_game/',
        description:
          '射飛碟遊戲中，會有很多飛碟從上方出現往下移動，要在它們落地前擊落它們。有四種難度等級可以選擇。',
      },
      {
        from: new Date(2020, 8),
        title: '迷宮遊戲',
        tags: ['迷宮', '遊戲'],
        img: './img/maze.png',
        href: 'https://bestian.github.io/maze/',
        github: 'https://www.github.com/bestian/maze/',
        description:
          '迷宮遊戲是用3D模組做的迷宮，有三個關卡，可以開啟神模式就能穿牆。',
      },
      {
        from: new Date(2020, 7),
        title: '我愛玩學校',
        tags: ['學校', '入口'],
        img: './img/ilove.png',
        href: 'https://3dw.github.io/ilove/',
        github: 'https://www.github.com/3dw/ilove/',
        description:
          '我愛玩學校是一個很特別的學習團體，時常辦一些有趣的活動，為新小孩創造新經驗。',
      },
      {
        from: new Date(2020, 3),
        title: 'BMI試算機',
        tags: ['體重', '試算'],
        img: './img/bmi.png',
        href: 'https://bestian.github.io/bmi/',
        github: 'https://www.github.com/bestian/bmi/',
        description:
          'BMI試算機可以幫你做體重的試算，具有體重控制的輔助作用。',
      },
      {
        from: new Date(2019, 3),
        title: 'Playback形式備忘',
        tags: ['Playback', '備忘', '動畫'],
        img: './img/freemath.png',
        href: 'https://3dw.github.io/playback/',
        github: 'https://www.github.com/3dw/playback/',
        description:
          'Playback形式備忘是用動畫的形式，記錄Playback同理心劇理的各種演出形式，可以當成備忘使用。',
      },
      {
        from: new Date(2018, 2),
        title: '自然美食DIY',
        tags: ['食物', '備忘'],
        img: './img/food.png',
        href: 'https://food.bestian.tw/#/',
        github: 'https://www.github.com/bestian/food/',
        description:
          'Ｈi 這裡用來存放Hsinyi的煮食紀錄。我們家的料理，蔬食比例較多，沒有特別標素不素，料理靈感來自大地、靈感乍現，以及許多人分享的經驗與智慧。飲食區打食材關鍵字（如：紅豆）可以找到相關的料理，祝大家食在喜悅、自然~',
      },
      {
        from: new Date(2017, 2),
        title: '量子催眠回溯',
        tags: ['催眠', '備忘'],
        img: './img/qhht.png',
        href: 'https://bestian.github.io/qhht/',
        github: 'https://www.github.com/bestian/qhht/',
        description:
          '這裡存放著三篇量子催眠回溯的記錄，還有量子催眠回溯的簡介。',
      },
      {
        from: new Date(2017, 0),
        title: '小道小報',
        tags: ['隨機', '文學', '遊戲'],
        img: './img/xikxik.png',
        href: 'https://xikxik.bestian.tw/#/',
        github: 'https://www.github.com/bestian/xikxik/',
        description:
          '小道小報是隨機的搞笑新聞產生器，會用隨機的元素組合成假新聞，讓人會心一笑。',
      },
      {
        from: new Date(2018, 0),
        title: '字卡產生器',
        tags: ['中文', '認知'],
        img: './img/word.png',
        href: 'https://word.bestian.tw/#/',
        github: 'https://www.github.com/bestian/word/',
        description:
          '字卡產生器可以讓使用者自己打子，產生出鏤空的大字，讓人練習書寫。',
      },
      {
        from: new Date(2017, 5),
        title: '湊12',
        tags: ['數學', '遊戲', 'App'],
        img: './img/play12.png',
        href: 'https://bestian.github.io/q-play12/',
        github: 'https://www.github.com/bestian/q-play12/',
        description:
          '湊12是一個數字遊戲，用四張1~6的卡牌，用加減乘除四則運算要湊出12的結果。',
      },
      {
        from: new Date(2020, 5),
        title: '打籃球',
        tags: ['遊戲'],
        img: './img/ball.png',
        href: 'https://bestian.github.io/basketball/',
        github: 'https://www.github.com/bestian/basketball/',
        description:
          '這是一個投籃的小遊戲，可以上下左右描準並射籃。',
      },
      {
        from: new Date(2016, 6),
        title: '湊10釣魚',
        tags: ['數學', '遊戲', 'App'],
        img: './img/fish.png',
        href: 'https://bestian.github.io/fishing-10/',
        github: 'https://www.github.com/bestian/fishing-10/',
        description:
          '湊10釣魚是一個記憶遊戲，要記得牌卡的位置才能配對。',
      },
      {
        from: new Date(2020, 6),
        title: '學習風格自我測驗',
        tags: ['自學', '測驗', 'App'],
        img: './img/styletest.png',
        href: 'https://bestian.github.io/q-styletest/',
        github: 'https://www.github.com/bestian/q-styletest/',
        description:
          '學習風格自我測驗，可以用視聽讀作四方向的架構，協助您測出最適合您的學習方法。',
      },
      {
        from: new Date(2008, 0),
        title: '倍數著色',
        tags: ['數學', '遊戲', 'App'],
        img: './img/colormath.png',
        href: 'https://bestian.github.io/q-colormath/',
        github: 'https://www.github.com/bestian/q-colormath/',
        description: '倍數著色是用著色的方式，突顯出數學上倍數的規律。',
      },
      {
        from: new Date(2020, 3),
        title: '解方程式機',
        tags: ['數學', '遊戲'],
        img: './img/equation.png',
        href: 'https://github.com/bestian/equation',
        github: 'https://github.com/bestian/equation',
        description: '解方程式機用Haskell撰寫，可以解一元一次和一元二次方程式。',
      },
      {
        from: new Date(2020, 3),
        title: '數學出題機',
        tags: ['數學', '遊戲'],
        img: './img/quiz.png',
        href: 'https://github.com/bestian/mathquiz',
        github: 'https://github.com/bestian/mathquiz',
        description: '數學出題機用Haskell撰寫，可以自動出題和確認答案，有不同的難度可以選則。',
      },
      {
        from: new Date(2021, 0),
        title: '打地鼠遊戲',
        tags: ['遊戲'],
        img: './img/mole.png',
        href: 'https://bestian.github.io/mole/',
        github: 'https://github.com/bestian/mole/',
        description: '打地鼠遊戲是一個簡單輕鬆的小遊戲。',
      },
      {
        from: new Date(2021, 1),
        title: '浩克打怪',
        tags: ['遊戲'],
        img: './img/hulk.png',
        href: 'https://bestian.github.io/hulk/',
        github: 'https://github.com/bestian/hulk/',
        description: '浩克打怪是一個簡單輕鬆的小遊戲。',
      },
      {
        from: new Date(2021, 2),
        title: '質因數分解',
        tags: ['數學'],
        img: './img/prime.png',
        href: 'https://bestian.github.io/prime/',
        github: 'https://github.com/bestian/prime/',
        description: '質因數分解是一個簡單的數學小程式。',
      },
      {
        from: new Date(2021, 2),
        title: '畢氏三組數產生器',
        tags: ['數學'],
        img: './img/pytha.png',
        href: 'https://bestian.github.io/pytha/',
        github: 'https://github.com/bestian/pytha/',
        description: '畢氏三組數產生器是一個簡單的數學小程式。',
      },
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input {
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
  padding-top: 1.6em !important;
}

.ui.attached.buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.tag {
  margin: 0 1em;
}

.ui.radio.checkbox label {
  color: white;
}

.ui.list .list>.item .description, .ui.list>.item .description {
  color: white !important;
  margin-top: 1em;
}

.avatar img {
  width: 100px;
  float: left;
  margin-right: 2em;
}

.mini.avatar img {
  width: 4em;
  float: left;
  margin: 0 .5em;
}

.ui.radio.checkbox {
  margin-left: 2em;
}

.float.right {
  float: right;
}

.ui.form .inline.fields {
  margin-top: 1em;
}

.ui.two.bottom.attached.fluid.buttons {
  position: absolute;
  bottom: -1px;
}

iframe {
  background-color: white;
}

.ui.segment.container {
  text-align: left;
}

.block img {
  height: 3.2em;
}

.fixed {
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
}

</style>
