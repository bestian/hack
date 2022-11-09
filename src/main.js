import Vue from 'vue';
import './registerServiceWorker';
import SuiVue from 'semantic-ui-vue';
import { rtdbPlugin, firestorePlugin } from 'vuefire';
import VueSimpleMarkdown from 'vue-simple-markdown';
import VueGtag from 'vue-gtag';
import VueMeta from 'vue-meta';
import router from './router';
import App from './App.vue';
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css';
import './db';

Vue.use(firestorePlugin);

Vue.use(VueMeta);

Vue.use(VueGtag, {
  config: { id: 'G-NXRRCJB510' },
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
