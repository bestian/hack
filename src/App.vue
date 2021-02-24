<template lang='pug'>
  #app
    sui-menu#nav-bar.no-print(:widths="8" inverted="")
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
        router-link(to="/gift")
          sui-icon(name="gift")
          span.fat-only 禮物
      sui-menu-item
        router-link(to="/faq")
          sui-icon(name="question")
          span.fat-only FAQ
      sui-menu-item
        router-link(to="/quiz")
          sui-icon(name="info")
          span.fat-only 測驗
      // sui-menu-item
        router-link(to="/chat")
          sui-icon(name="file")
          span.fat-only 留言
      sui-menu-item.fat-only
        iframe(src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fhack.bestian.tw&layout=button_count&size=small&appId=485195848253155&width=71&height=20", width="110", height="20", style="border:none;overflow:hidden", scrolling="no", frameborder="0" allowTransparency="true", allow="encrypted-media")
    router-view(:likes = "likes", :chats = "chats", @submit = "submit", :dark="dark")
    footer.ui.container#ad
      .ui.list
        // .item 試課學費: 500元
        a.item(href="mailto:bestian@gmail.com?subject=我想瞭解Bestian的程式課", target="_blank", @click="track('e-mail', 60)")
          | 洽詢: bestian@gmail.com
        a.item.fat-only#src(href="http://www.github.com/bestian/hack", target="_blank", @click="track('github', 10)", rel="noopener noreferrer")
          i.github.icon
          | 原始碼

        sui-checkbox#dark.fat-only(toggle, label = "黑暗模式", v-model="dark")

    //a.attr(href="http://www.freepik.com", target="_blank") Designed by Ydlabs / Freepik
  </div>
</template>

<script>

import { chatsRef } from './firebase/db';

export default {
  name: 'App',
  firebase: {
    chats: chatsRef,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: '歡迎',
    // all titles will be injected into this template
    titleTemplate: '%s | 跟Bestian一起架網站',
  },
  data() {
    return {
      dark: false,
      likes: [
        {
          n: '某人',
          r: '某人的媽媽',
          q: '某句好話',
        }],
      chats: undefined,
    };
  },
  mounted() {
  },
  methods: {
    track(t, v) {
      this.$gtag.event('action', {
        event_category: t,
        event_action: t,
        event_label: t,
        value: v,
      });
    },
    submit(n, email, t) {
      const o = {
        n,
        email,
        t,
        time: (new Date()).getTime(),
      };
      if (t) {
        this.$firebaseRefs.chats.push(o);
        window.alert('留言已送出');
        this.track('chat', 20);
      } else {
        window.alert('請輸入留言');
      }
    },
  },
};
</script>

<style>

.ui.grid>.row>.column {
  padding-left: .5rem;
  padding-right: .5rem;
}

.column .ui.list {
    text-align: left;
    height: 350px;
}

@media screen and (max-width: 767px) {
  .column .ui.list {
      height: auto;
  }
}

.light-green, .light-blue, .light-red, .light-yellow {
  padding: 0.5em;
}

.light-green, .light-green.column .ui.list {
  background-color: hsla(120, 50%, 85%, 1)
}
.light-blue, .light-blue.column .ui.list {
  background-color: hsla(182, 50%, 85%, 1)
}
.light-red, .light-red.column .ui.list {
  background-color: hsla(0, 20%, 90%, 1)
}
.light-yellow, .light-yellow.column .ui.list {
  background-color: hsla(60, 50%, 85%, 1)
}

a.attr {
  position: fixed;
  z-index: 9;
  right: 0;
  bottom: 0;
  font-size: .2em;
}

body {
 background-color: hsla(120, 75%, 0%, 1) !important;
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
  color: hsla(230, 86%, 30%, 1);
  white-space: pre-line;
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
  background-color: hsla(120, 100%, 96%, 1) !important;
  font-size: 1.2em !important;
/*  box-shadow: 6px 5px 2px 1px hsla(251, 84%, 80%, 0.8) !important; */
}

.ui.segment.dark {
  background-color: black !important;
  color: white !important;
}

.ui.segment.dark .sub.header {
  color: white !important;
}

img.float.left {
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 2em;
  height: 10em;
}

img.small {
  border-radius: 50%;
  height: 6em;
}

@media screen and (max-width:600px) {
  img.float.left {
    left: 0;
    height: 5em;
  }
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
}
*/

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
/*  box-shadow: 6px 5px 2px 1px hsla(251, 84%, 80%, 0.8) !important; */
}

footer a, footer i {
  color: white !important;
  text-decoration: underline;
}

p {
  text-align: left;
}

#src {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: #333;
  padding: .2em;
  text-decoration: none;
}

#dark {
  position: fixed;
  bottom: 1.6em;
  left: 0;
  z-index: 10;
  background-color: #333;
  padding: .2em;
}

.ui.toggle.checkbox .box, .ui.toggle.checkbox label {
  color: white;
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

@keyframes turn {
  0%   {transform: rotate(0deg); -webkit-transform: rotate(0deg);}
  50%  {transform: rotate(180deg); -webkit-transform: rotate(180deg);}
  100% {transform: rotate(360deg); -webkit-transform: rotate(360deg);}
}

.logo {
  position: relative;
  top: 0;
  width: 10vmin !important;
  /* animation: haha 1s 2; */
  cursor: pointer;
}

.haha {
  position: relative;
  top: 0;
  animation: haha 1s 2;
}

.turn {
  position: relative;
  top: 0;
  animation: turn 2s 1;
}

.router-link-exact-active.router-link-active {
/*  font-size: 1em; */
  color: hsla(138, 100%, 76%, 1) !important;
}

@media screen and (max-width: 420px) {
  .router-link-exact-active.router-link-active {
    font-size: 1em;
  }
}

@media screen and (min-width: 661px) {
  .thin-only {
    display: none !important;
  }
  footer.tada#ad {
    padding-left: 20vw;
  }
}

@media screen and (max-width: 660px) {
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

.timeline-item .title-item {
  font-size: 22px !important;
}

.timeline-item .description-item {
  font-size: 18px !important;
  color: white !important;
  font-weight: normal !important;
}

img.history {
  width: 180px !important;
  float: left !important;
  margin-right: 1em !important;
  background-color: white !important;
}

@media screen and (max-width: 420px) {
  img.history {
    width: 100px !important;
  }
}

.timeline .wrapper-item .section-year .year {
  font-size: 20px !important;
  color: white !important;
}

a {
/*  cursor: url('/img/cursor.png'), auto !important; */
}

</style>
