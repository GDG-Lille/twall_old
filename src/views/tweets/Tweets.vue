<template>
  <section class="tweets">
    <app-loading :label="$t('TWEETS.IS_LOADING')"
                 v-if="isLoading">
    </app-loading>

    <app-message :action="getTweets"
                 :message="$t('TWEETS.IS_EMPTY')"
                 v-else-if="columns.length === 0">
    </app-message>

    <div class="container"
         v-else>
      <div :key="`column_${idx}`"
           class="column"
           v-for="(tweets, idx) in columns">
        <tweet :key="`tweet_${tweetId}`"
               :tweet="tweet"
               v-for="(tweet, tweetId) in tweets">
        </tweet>
      </div>
    </div>

    <app-live>{{ $route.query.criteria }}</app-live>
  </section>
</template>

<script>
import AppLive from '@/components/app-live/AppLive';
import AppLoading from '@/components/app-loading/AppLoading';
import AppMessage from '@/components/app-message/AppMessage';
import TweetsService from '@/services/TweetsService';
import Tweet from './components/Tweet';

export default {
  name: 'Tweets',
  components: { AppLive, Tweet, AppMessage, AppLoading },
  data() {
    return {
      isLoading: false,
      columns: [],
      timeout: null,
    };
  },
  created() {
    this.isLoading = true;
    this.getTweets();
  },
  destroyed() {
    window.clearTimeout(this.timeout);
  },
  methods: {
    getTweets() {
      const refreshTime = this.$route.query.refreshTime || 5000;
      const criteria = this.$route.query.criteria;

      TweetsService.findAll()
        .then(tweets => {
          this.columns = [];
          Object.keys(tweets).forEach((tweetId, idx) => {
            if (this.columns[idx % 4] === undefined) {
              this.columns[idx % 4] = {};
            }

            this.columns[idx % 4][tweetId] = tweets[tweetId];
          });
        })
        .catch(err => console.error(err))
        .finally(() => this.isLoading = false);
    },
  },
};
</script>

<style scoped lang="scss">
.tweets {
  .container {
    display: flex;
    flex-direction: row;
    height: 100%;

    .column {
      width: calc(100% / 4);

      .tweet + .tweet {
        border-top: 1px solid #E0E0E0;
      }
    }

    .column + .column {
      border-left: 1px solid #E0E0E0;
    }
  }
}
</style>
