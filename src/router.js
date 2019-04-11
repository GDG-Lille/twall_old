import Vue from 'vue';
import Router from 'vue-router';
import InterConf from './views/inter-conf/InterConf';
import Talks from './views/talks/Talks';
import Tweets from './views/tweets/Tweets';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/inter-conf',
      component: InterConf,
      children: [
        {
          path: '',
          name: 'inter-conf',
          components: {
            talks: Talks,
            tweets: Tweets,
          },
        },
      ],
    },
    {
      path: '/talks',
      component: Talks,
    },
    {
      path: '/tweets',
      component: Tweets,
    },
    {
      path: '**',
      redirect: { name: 'inter-conf' },
    },
  ],
});
