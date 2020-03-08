<template lang='pug'>
  #app
    sui-menu(:widths="2")
      sui-menu-item
        router-link(to="/")
          sui-icon(name="home")
          | Home
      sui-menu-item
        router-link(to="/course")
          sui-icon(name="users")
          | 課程
    router-view
    footer
      a(href="mailto:bestian@gmail.com")
        | bestian@gmail.com
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
