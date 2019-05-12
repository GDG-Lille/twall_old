<template>
  <md-card class="tweet md-no-elevation">
    <md-card-header>
      <md-avatar>
        <img :src="tweet.user.profileImageURL"
             alt="Avatar"
             loading="lazy">
      </md-avatar>
      <div class="md-title">{{ tweet.user.fullName }}</div>
      <div class="md-subhead">
        @{{ tweet.user.login }} - {{ tweet.createdAt | date('v') }}
      </div>
    </md-card-header>
    <md-card-content>{{ tweet.text }}</md-card-content>
    <md-card-actions>
      <md-badge :md-content="tweet.nbOfRetweets">
        <md-button class="md-icon-button">
          <md-icon class="retweet">cached</md-icon>
        </md-button>
      </md-badge>

      <md-badge :md-content="tweet.nbOfLikes">
        <md-button class="md-icon-button like">
          <md-icon class="like">favorite</md-icon>
        </md-button>
      </md-badge>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'Tweet',
  props: {
    tweet: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.tweet {
  border-radius: 0;

  .retweet {
    color: #4CAF50 !important;
  }

  .like {
    color: #F44336 !important;
  }
}
</style>
