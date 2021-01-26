import Vue from 'vue';
import './registerServiceWorker';
import SuiVue from 'semantic-ui-vue';
import { rtdbPlugin } from 'vuefire';
import VueSimpleMarkdown from 'vue-simple-markdown';
import VueGtag from 'vue-gtag';
import router from './router';
import 'semantic-ui-css/semantic.min.css';
import App from './App.vue';
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css';
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

Vue.use(VueGtag, {
  config: { id: 'UA-26178243-11' },
}, router);

Vue.use(VueSimpleMarkdown);

Vue.use(SuiVue);
Vue.use(rtdbPlugin);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
