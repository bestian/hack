<template lang='pug'>
  #app
    sui-menu(:widths="5")
      sui-menu-item
        router-link(to="/")
          sui-icon(name="home")
          | Home
      sui-menu-item
        router-link(to="/course")
          sui-icon(name="users")
          | 課程
      sui-menu-item
        router-link(to="/flow")
          sui-icon(name="sync")
          | 流程
      sui-menu-item
        router-link(to="/payment")
          sui-icon(name="payment")
          | 學費
      sui-menu-item
        router-link(to="/faq")
          sui-icon(name="question")
          | FAQ
    router-view
    footer.tada
      span 目前開放預約課程時間: 週四下午；週六上午。
        a(href="mailto:bestian@gmail.com", target="_blank")
          | 洽詢: bestian@gmail.com
        | &nbsp;&nbsp;|&nbsp;&nbsp;
        a(href="https://forms.gle/bifRYSf24UNfx8Te6", target="_blank") 報名表請按此
  </div>
</template>

<script>
export default {
  name: 'App'
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
  padding: 1em;
  bottom: 0;
  right: 0;
  text-align: center;
  z-index: 9;
  background-color: white;
}

.tada {
  position: relative;
  animation: tada 4s ease-in-out infinite;
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
}

@media screen and (max-width: 420px) {
  .router-link-exact-active.router-link-active {
    font-size: 1em;
    color: purple !important;
  }
}

</style>
