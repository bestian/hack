// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import '@babel/polyfill'
import { rtdbPlugin } from 'vuefire'
import VueAnalytics from 'vue-analytics'
import VueSimpleMarkdown from 'vue-simple-markdown'

Vue.use(VueSimpleMarkdown)

Vue.use(VueAnalytics, {
  id: 'UA-26178243-11',
  router,
  autoTracking: {
    pageviewOnLoad: false
  }
})

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
