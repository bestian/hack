<template lang='pug'>
  #app
    sui-menu#nav-bar.no-print(:widths="7" inverted="")
      sui-menu-item
        router-link(to="/")
          sui-icon(name="home")
          span.fat-only {{ $t('home') }}
      sui-menu-item
        router-link(to="/about")
          sui-icon.fat-only(name="user")
          span {{ $t('about_me') }}
      sui-menu-item
        router-link(to="/comments")
          sui-icon.fat-only(name="comments")
          span.fat-only {{ $t('clients') }}
          span {{ $t('comments') }}
      sui-menu-item
        router-link(to="/course")
          sui-icon.fat-only(name="users")
          span {{ $t('courses') }}
      sui-menu-item
        a(:href = "'https://www.facebook.com/sharer/sharer.php?u=https://hack.bestian.tw/#/' + $router.currentRoute.path", target="_blank", rel="noopener noreferrer")
          sui-icon.fat-only(name="facebook")
          span {{ $t('share') }}
      sui-menu-item
        sui-dropdown(icon="world") {{$t(locale)}}
          i.angle.down.icon
          sui-dropdown-menu(button, inverted="true")
            sui-dropdown-item(@click="locale = 'zh-TW'") 正體中文
            sui-dropdown-item(@click="locale = 'zh-CN'") 簡体中文
            sui-dropdown-item(@click="locale = 'en'") English
      sui-menu-item.clickable(v-if="!uid && !isInApp", @click="loginGoogle()")
        sui-icon.fat-only(name="google")
        span {{ $t('login') }}
      sui-menu-item(v-if="uid")
        img.ui.avatar(:src="photoURL", referrerpolicy="no-referrer")
        sui-dropdown(icon="angle down")
          sui-dropdown-menu(button, inverted="true")
            sui-dropdown-item
              router-link#black(to="/chat")
                sui-icon(name="file")
                span {{ $t('comment') }}
            sui-dropdown-divider
            sui-dropdown-item
              a.ui(@click="logout()")
                sui-icon(name="user")
                span {{ $t('logout') }}
      //sui-menu-item
        router-link(to="/flow")
          sui-icon.fat-only(name="sync")
          span 流程
      //sui-menu-item
        router-link(to="/payment")
          sui-icon.fat-only(name="payment")
          span 學費
      //sui-menu-item
        router-link(to="/gift")
          sui-icon.fat-only(name="gift")
          span 禮物
      //sui-menu-item
        router-link(to="/faq")
          sui-icon.fat-only(name="question")
          span FAQ
      //sui-menu-item
        router-link(to="/gallary")
          sui-icon.fat-only(name="pencil alternate")
          span 畫廊
      // sui-menu-item
        router-link(to="/quiz")
          sui-icon(name="info")
          span.fat-only 測驗
      // sui-menu-item
        router-link(to="/chat")
          sui-icon(name="file")
          span.fat-only 留言
    router-view(:likes = "likes", :chats = "chats", @submit = "submit", :dark="dark", :email = "email", :locale="locale")
    //footer.ui.container#ad
      .ui.list
         .item 試課學費: 500元
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

import InApp from 'detect-inapp'
import { auth, db } from './db'
import { signInWithRedirect, getRedirectResult, GoogleAuthProvider } from 'firebase/auth'
import { ref, set, onValue } from 'firebase/database'

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/userinfo.email')
const chatsRef = ref(db, 'chats')
const inapp = new InApp(navigator.userAgent || navigator.vendor || window.opera)

export default {
  name: 'App',
  metaInfo () { 
    return {
      title: this.$t('title'),
      titleTemplate: this.$t('%s') + ' | ' + 'Bestian' + this.$t('\'s_Web_Workshop'),
    } 
  },
  data() {
    return {
      locale: 'zh-TW',
      email: null,
      token: null,
      chats: [],
      isInApp: inapp.isInApp,
      photoURL: null,
      uid: null,
      user: null,
      dark: false,
      likes: [
        {
          n: '某人',
          r: '某人的媽媽',
          q: '某句好話',
        }]
    };
  },
  mounted () {
    console.log(navigator.languages[0])
    this.locale = navigator.languages[0] || 'zh-TW'
    if (this.locale.indexOf('en') > -1) {
      this.locale = 'en'
    }
    const vm = this
    onValue(chatsRef, (snapshot) => {
      const data = snapshot.val()
      // console.log(data)
      vm.chats = data
    })
    console.log(vm.isInApp)
    getRedirectResult(auth).then((result) => {
        // console.log(result)
      // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user

        console.log(credential)
        // console.log(token)

        vm.user = user
        vm.email = user.providerData[0].email
        // console.log(vm.email)
        vm.token = token
        // The signed-in user info.
        vm.uid = result.user.uid
        // console.log(user)
        vm.photoURL = decodeURI(user.photoURL)
        // console.log(vm.photoURL)
        // console.log(user)

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode);
      console.log(errorMessage);
    })
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  },
  methods: {
    loginGoogle: function () {
      if (this.isInApp) {
        window.alert('本系統不支援facebook, link等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝')
      } else {
        signInWithRedirect(auth, provider)
      }
    },
    logout () {
      const vm = this
      auth.signOut().then(function() {
        vm.user = null
        vm.uid = null
        vm.photoURL = null
      })
    },
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
        this.chats.push(o);
        set(ref(db, 'chats'), this.chats).then(() => {
          window.alert('留言已送出')
        })
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
    height: 500px;
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

a {
  color: #61c3f4
}

#black {
  color: black !important;
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
  height: 8em;
  opacity: 0.8;
  transition: all .3s ease;
}

img.float.left:hover {
  opacity: 1
}

img.small.float.left {
  border-radius: 50%;
  height: 6em;
  opacity: 0.8;
  transition: all .3s ease;
}

img.small.float.left:hover {
  opacity: 1
}

img.small {
  border-radius: 50%;
  height: 6em;
  opacity: 0.8;
  transition: all .3s ease;
}

img.small:hover {
  opacity: 1
}

@media screen and (max-width:600px) {
  img.float.left {
    left: 0;
    height: 5em;
  }
}

.left {
  text-align: left;
  max-width: 40vmax;
  margin: 0 auto !important;
  display: inline-block;
}

.ui.large.header.main {
  background-color: white;
  max-width: 50vmax;
  margin: 0 auto !important;
  display: block;
  position: relative;
  z-index: 9;
  border-radius: 15px;
}

.ui.header .icon:only-child {
  margin-right: 0;
}

.clickable {
  cursor: pointer;
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

.ui.avatar {
  width: 1em;
  margin: 0;
}

.ui.dropdown .menu {
  position: fixed;
  top: 3em;
  left: auto;
  right: 2em;
  width: 20%;
  min-width: 100px;
  min-height: 300px;
}

.ui.small {
  width: 3em;
  height: 3em;
  border-radius: 50%;
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
  /* cursor: pointer; */
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

.sh {
  box-shadow: 0px 5px 5px 0px #9B8F99;
}

img.history {
  width: 120px !important;
  float: left !important;
  margin-right: 1em !important;
  background-color: white !important;
  box-shadow: 5px 5px 5px 0px #9B8F99;
}

@media screen and (max-width: 420px) {
  img.history {
    width: 80px !important;
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
