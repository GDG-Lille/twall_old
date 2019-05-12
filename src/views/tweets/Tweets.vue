<template>
  <section class="tweets">
    <app-loading :label="$t('TWEETS.IS_LOADING')"
                 v-if="isLoading">
    </app-loading>

    <app-message :action="findTweets"
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
      <app-live>{{ Object.values(columns[0])[0].criteria }}</app-live>
    </div>
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
    this.findTweets();

    // Master Mode, trigger the Cloud Function to fetch Tweets on Twitter side
    if (this.$route.query.criteria) {
      const refreshTime = this.$route.query.refreshTime || 5000;
      this.timeout = window.setInterval(() => this.findTweetsFromTwitter(), refreshTime);
    }
  },
  destroyed() {
    window.clearTimeout(this.timeout);
  },
  methods: {
    findTweets() {
      const editionId = this.$route.query.editionId;

      TweetsService.findAllForEdition(editionId)
        .onSnapshot(querySnapshot => {
          const tweets = {};
          querySnapshot.forEach(doc => {
            const tweetData = doc.data();
            tweetData.createdAt = new Date(tweetData.createdAt.seconds * 1000);
            tweets[doc.id] = tweetData;
          });

          this.columns = [];
          Object.keys(tweets).forEach((tweetId, idx) => {
            if (this.columns[idx % 4] === undefined) {
              this.columns[idx % 4] = {};
            }
            this.columns[idx % 4][tweetId] = tweets[tweetId];
          });

          this.isLoading = false;
        });
    },
    findTweetsFromTwitter() {
      const editionId = this.$route.query.editionId;
      const criteria = this.$route.query.criteria;

      TweetsService.findAllFromTwitter(editionId, criteria)
        .catch(err => console.error(err));
    },
  },
};
</script>

<style lang="scss" scoped>
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
