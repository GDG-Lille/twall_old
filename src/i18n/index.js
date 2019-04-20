import moment from 'moment';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import fr from './fr.js';

Vue.use(VueI18n);

moment.locale('fr');

export default new VueI18n({
  locale: 'fr',
  messages: {
    fr,
  },
});
