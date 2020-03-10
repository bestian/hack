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
    footer
      span.tada 目前開放預約課程時間: 週三上下午、週四下午；週六上午。
        a(href="mailto:bestian@gmail.com")
          | 洽詢與報名: bestian@gmail.com
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
  position: fixed;
  padding: 1em;
  bottom: 0;
  right: 0;
  text-align: right;
  z-index: 9;
}

.tada {
  position: relative;
  animation: tada 4s infinite;
}

@keyframes tada {
  0%   {color: #cc0000; right: 10vw}
  50%  {color: #000000; right: 0vw}
  100% {color: #cc0000; right: 10vw}
}

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

</style>
