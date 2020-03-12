<template lang='pug'>
  #app
    sui-menu.no-print(:widths="6")
      sui-menu-item
        router-link(to="/")
          sui-icon(name="home")
          span.fat-only 首頁
      sui-menu-item
        router-link(to="/course")
          sui-icon(name="users")
          span.fat-only 課程
      sui-menu-item
        router-link(to="/flow")
          sui-icon(name="sync")
          span.fat-only 流程
      sui-menu-item
        router-link(to="/payment")
          sui-icon(name="payment")
          span.fat-only 學費
      sui-menu-item
        router-link(to="/faq")
          sui-icon(name="question")
          span.fat-only 問題
      sui-menu-item
        router-link(to="/chat")
          sui-icon(name="file")
          span.fat-only 留言板
    router-view(:likes = "likes", :chats = "chats", @submit = "submit")
    footer.tada
      span 目前開放預約課程時間:
        br
        | 週一下午、週三上午、週四下午。
        br
        a(href="mailto:bestian@gmail.com", target="_blank")
          | 洽詢: bestian@gmail.com
        br
        a(href="https://forms.gle/bifRYSf24UNfx8Te6", target="_blank") 報名: 報名表請按此
  </div>
</template>

<script>

import { chatsRef } from './firebase/db'

export default {
  name: 'App',
  firebase: {
    chats: chatsRef
  },
  data () {
    return {
      likes: [
        { n: '某人',
          r: '某人的媽媽',
          q: '某句好話'
        }],
      chats: undefined
    }
  },
  methods: {
    submit: function (n, email, t) {
      var o = {
        n: n,
        email: email,
        t: t,
        time: (new Date()).getTime()
      }
      if (t) {
        this.$firebaseRefs.chats.push(o)
      } else {
        window.alert('請輸入留言')
      }
    }
  }
}
</script>

<style>

body {
  background-image: url('/static/bg-img.jpeg');
  background-repeat: repeat;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

footer {
  font-size: 1.2em;
  text-align: left !important;
  padding: 1em 5em;
  bottom: 0;
  right: 0;
  text-align: center;
  z-index: 9;
  background-color: white;
}

.tada {
  position: relative;
  animation: tada 4s ease-in 3;
}
/*

@keyframes tada {
  0%   {color:red; left:-5vw; top:0px;}
  50%  {color:blue; left:5vw; top:0x;}
  100% {color:red; left:-5vw; top:0px;}
} */

@keyframes haha {
  0%   {transform: scale(1); -webkit-transform: scale(1)}
  50%  {transform: scale(1); -webkit-transform: scale(1.5)}
  100% {transform: scale(1); -webkit-transform: scale(1)}
}

.logo {
  width: 10vmin !important;
  animation: haha 2s infinite;
  cursor: pointer;
}

.router-link-exact-active.router-link-active {
  font-size: 1.5em;
  color: purple !important;
}

@media screen and (max-width: 420px) {
  .router-link-exact-active.router-link-active {
    font-size: 1em;
    color: purple !important;
  }
}

@media screen and (min-width: 420px) {
  .thin-only {
    display: none !important;
  }
}

@media screen and (max-width: 420px) {
  .fat-only {
    display: none !important;
  }
}

.print-only {
  visibility: hidden;
}

@media print {
  .no-print {
    visibility: hidden;
  }

  .print-only {
    visibility: visible;
  }
}
</style>
