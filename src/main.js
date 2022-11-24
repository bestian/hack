import Vue from 'vue';
import './registerServiceWorker';
import SuiVue from 'semantic-ui-vue';
import VueSimpleMarkdown from 'vue-simple-markdown';
import VueGtag from 'vue-gtag';
import VueMeta from 'vue-meta';
import router from './router';
import i18n from './i18n'
import App from './App.vue';
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css';
import './db';

Vue.use(VueMeta);

Vue.use(VueGtag, {
  config: { id: 'G-NXRRCJB510' },
}, router);

Vue.use(VueSimpleMarkdown);

Vue.use(SuiVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
