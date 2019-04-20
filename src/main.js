import Vue from 'vue';
import App from './App.vue';

import './filters';
import './firebase';
import './google-analytics';

import i18n from './i18n';
import './registerServiceWorker';
import router from './router';
import './theming';

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
