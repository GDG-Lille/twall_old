import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';
import Vue from 'vue';
import VueMaterial from 'vue-material';

import App from './App.vue';

import './filters';

import i18n from './i18n';
import './registerServiceWorker';
import router from './router';
import './theme.scss';

// Theming
Vue.use(VueMaterial);

// Firebase
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'production') {
  // Google Analytics only on Prod
  document.write(
    '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-124200391-5"></script>' +
    '<script>' +
    '  window.dataLayer = window.dataLayer || [];' +
    '  function gtag(){dataLayer.push(arguments);}' +
    '  gtag(\'js\', new Date());' +
    '  gtag(\'config\', \'UA-124200391-5\');' +
    '</script>');
}

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
