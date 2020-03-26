<template lang='pug'>
  #app
    sui-menu#nav-bar.no-print(:widths="6" inverted="")
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
          span.fat-only 留言
    router-view(:likes = "likes", :chats = "chats", @submit = "submit")
    footer.ui.container.tada#ad
      .ui.list
        .item 目前開放預約課程時間:
        .item 僅週四上午。
        a.item(href="mailto:bestian@gmail.com", target="_blank")
          | 洽詢: bestian@gmail.com
        a.item(href="https://forms.gle/bifRYSf24UNfx8Te6", target="_blank") 報名: 請按此填表
        a.item#src(href="http://www.github.com/bestian/hack", target="_blank")
          i.github.icon
          | 原始碼

    //a.attr(href="http://www.freepik.com", target="_blank") Designed by Ydlabs / Freepik
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
        window.alert('留言已送出')
      } else {
        window.alert('請輸入留言')
      }
    }
  }
}
</script>

<style>

.column .ui.list {
  text-align: left;
  padding: .6em 1.5em;
  min-height: 250px;
  justify-content: center;
}

.light-green.column .ui.list {
  background-color: hsla(120, 89%, 90%, 1)
}
.light-blue.column .ui.list {
  background-color: hsla(182, 89%, 90%, 1)
}
.light-red.column .ui.list {
  background-color: hsla(0, 89%, 90%, 1)
}
.light-yellow.column .ui.list {
  background-color: hsla(60, 89%, 90%, 1)
}

a.attr {
  position: fixed;
  z-index: 9;
  right: 0;
  bottom: 0;
  font-size: .2em;
}

body {
  background-color: hsla(160, 70%, 60%, 1) !important;
 /* border: 3px solid hsla(0, 70%, 70%, 1); */
 /*  background-image: url(/static/img/OLO2E00.jpg) !important;
   background-size: contain !important; */

 /* background-image: url('/static/bg-img.jpeg') !important; */
 /* background-repeat: repeat !important; */
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,
               'Microsoft JhengHei',
                'Microsoft YaHei',
                'STHeiti',
                'Apple LiGothic Medium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.ui.header {
  color: hsla(230, 86%, 30%, 0.9) !important;
}

#nav-bar {
  font-size: 1.2em;
  background-color: hsla(195, 29%, 23%, 1);
/*  text-shadow: 1px 1px hsla(167, 84%, 73%, 0.8) !important; */
}

#nav-bar a {
  position: absolute;
  padding-top: 10px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}

p {
  font-size: 18px;
}

.ui.segment {
/*  background-color: hsla(115, 100%, 100%, 0.81) !important; */
  font-size: 1.2em !important;
  box-shadow: 6px 5px 2px 1px hsla(251, 84%, 80%, 0.8) !important;
}
/*
.sunflower::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: url(/static/img/logo-big.jpg);
  background-size: contain;
  filter: grayscale(50%);
}

.heart::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: url(/static/img/heart.jpg);
  background-size: contain;
  filter: grayscale(75%);
  opacity: 0.8;
}

.ui.segment.code {
  background-color: hsla(115, 50%, 95%, 0.81) !important;
}

.code::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: url(/static/img/code.jpg);
  filter: grayscale(80%);
  opacity: 0.36;
}

.ui.segment.ranged {
  background-color: hsla(0, 50%, 95%, 0.81) !important;
}

.ranged::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: url(/static/img/ranged.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  filter: grayscale(75%);
  opacity: 1;
} */

footer {
  position: relative;
  color: white;
  z-index: 9;
  font-size: 1.2em;
  text-align: left !important;
  padding: 1em 5em;
  bottom: 0;
  right: 0;
  text-align: center;
  z-index: 9;
  background-color: hsla(195, 29%, 23%, 1);
  box-shadow: 6px 5px 2px 1px hsla(251, 84%, 80%, 0.8) !important;
}

footer a, footer i {
  color: white !important;
}

#src {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: #333;
  padding: .2em;
}

.tada {
  position: relative;
  animation: tada 2s ease-in 1;
}
/*

@keyframes tada {
  0%   {color:red; left:-5vw; top:0px;}
  50%  {color:blue; left:5vw; top:0x;}
  100% {color:red; left:-5vw; top:0px;}
} */

@keyframes haha {
  0%   {transform: scale(1); -webkit-transform: scale(1)}
  50%  {top: 1em; transform: scale(1.5); -webkit-transform: scale(1.5)}
  100% {transform: scale(1); -webkit-transform: scale(1)}
}

.logo {
  position: relative;
  top: 0;
  width: 10vmin !important;
  animation: haha 1s 2;
  cursor: pointer;
}

.haha {
  position: relative;
  top: 0;
  animation: haha 1s 2;
}

.router-link-exact-active.router-link-active {
  font-size: 1.3em;
/*  color: hsla(138, 100%, 76%, 1) !important; */
}

@media screen and (max-width: 420px) {
  .router-link-exact-active.router-link-active {
    font-size: 1em;
  }
}

@media screen and (min-width: 420px) {
  .thin-only {
    display: none !important;
  }
  footer.tada#ad {
    padding-left: 20vw;
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
