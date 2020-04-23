// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import '@babel/polyfill'
import { rtdbPlugin } from 'vuefire'
import VueSimpleMarkdown from 'vue-simple-markdown'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'UA-26178243-11' }
}, router)

Vue.use(VueSimpleMarkdown)

Vue.use(SuiVue)
Vue.use(rtdbPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
