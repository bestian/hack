<template lang="pug">
  .hello
    .ui.segment.container(:class="{dark: dark}")
      router-link(to="/faq")
        img.float.left(src="/img/elf.png", alt="elf")
      h1 小測驗
      h3 Q: {{ myQuiz.q }}
      .ui.vertical.buttons
        a.ui.huge.green.button(v-for="a in rand(myQuiz.as)", @click="ans(a)") {{ a }}
      h1.win(v-if="win == 1") 答對了!
      h1.win(v-if="win == 0") 答錯了!
      h1.win(v-if="win == null")
      br
      br
      a.ui.huge.green.button(@click="next()") 下一題
    br

</template>

<script>

export default {
  name: 'QuIz',
  props: ['likes', 'dark'],
  metaInfo: {
    title: '小測驗',
  },
  data() {
    return {
      win: null,
      quizs: [
        { q: '請問vue的迴圈呈現要寫什麼？', as: ['v-for', 'v-repeat', 'v-if', 'v-bind'] },
        { q: '請問vue的雙向資料綁定要寫什麼？', as: ['v-model', 'v-for', 'v-if', 'v-bind'] },
        { q: '請問vue的依條件決定顯示與否要寫什麼？', as: ['v-show', 'v-for', 'v-model', 'v-bind'] },
        { q: '請問vue的類型綁定要寫什麼？', as: [':class', 'v-class', 'v-bind-class', '@class'] },
        { q: '請問vue的樣式綁定要寫什麼？', as: [':style', 'v-style', 'v-bind-style', '@style'] },
        { q: '請問vue的HTML碼綁定要寫什麼？', as: ['v-html', ':html', 'bind-html', '@html'] },
        { q: '請問vue的事件觸發要寫什麼？', as: ['@', '#', '%', ':'] },
        { q: '請問vue的屬性輸入要寫什麼？', as: [':', '#', '%', '@'] },
        { q: '請問vue的路由導航鈕要寫什麼？', as: ['router-link', 'route-link', 'router', 'route'] },
        { q: '請問vue的初始資料要寫進哪裡？', as: ['data', 'props', 'componets', 'methods'] },
        { q: '請問vue的函式要寫進哪裡？', as: ['methods', 'props', 'componets', 'data'] },
        { q: '請問vue元件初始時要執行的函式要寫進哪裡？', as: ['mounted', 'methods', 'props', 'data'] },
        { q: '請問vue元件從父元件得到的資料要寫進哪裡？', as: ['props', 'componets', 'methods', 'data'] },
        { q: '請問vue元件使用的導入元件要寫進哪裡？', as: ['componets', 'props', 'methods', 'data'] },
        { q: '請問用vue CLI創建一個專案要打什麼指令？', as: ['vue create', 'vue add', 'vue new', 'vue init'] },
      ],
      myQuiz: {},
    };
  },
  methods: {
    rand(list) {
      if (!list) {
        return [];
      }
      return list.slice().sort(() => Math.random() - 0.5);
    },
    ans(a) {
      if (a === this.myQuiz.as[0]) {
        this.win = 1;
        setTimeout(this.next, 500);
      } else {
        this.win = 0;
      }
    },
    next() {
      this.win = null;
      this.myQuiz = this.quizs[Math.floor(Math.random() * this.quizs.length)];
    },
  },
  mounted() {
    this.next();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.white {
  color: white;
}

img.q {
  width: 300px;
}

.hello {

}
.good {
  height: 2em;
}
</style>
