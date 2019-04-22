<template>
  <div class="app-live">
    <md-snackbar :md-active.sync="isOnline"
                 :md-duration="Infinity"
                 class="snackbar online"
                 md-position="left">
      <div>
        <div class="dot"></div>
        <div>{{ $t('APP_LIVE.IS_ONLINE') }}</div>
      </div>
      <div>
        <span>{{ now | date('HH:mm') }}</span>
        &nbsp;
        <slot></slot>
      </div>
    </md-snackbar>
    <md-snackbar :md-active.sync="isOffline"
                 :md-duration="Infinity"
                 class="snackbar"
                 md-position="left">
      <div>{{ $t('APP_LIVE.IS_OFFLINE') }}</div>
      <div>
        <slot></slot>
      </div>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: 'AppLive',
  data() {
    return {
      isOnline: true,
      isOffline: false,
      now: new Date(),
      timeout: null,
    };
  },
  created() {
    window.ononline = () => {
      this.isOnline = true;
      this.isOffline = false;
    };

    window.onoffline = () => {
      this.isOffline = true;
      this.isOnline = false;
    };

    this.timeout = window.setInterval(() => this.now = new Date(), 1000);
  },
  destroyed() {
    window.clearInterval(this.timeout);
  },
};
</script>

<style lang="scss">
@keyframes live {
  50% {
    border-radius: 50%;
    box-shadow: 0 0 5px white;
  }
}

.snackbar {
  &.online {
    background-color: #F44336 !important;
  }

  .md-snackbar-content {
    & > div:first-child {
      display: flex;
      align-items: center;
      text-transform: uppercase;

      .dot {
        width: 18px;
        height: 18px;
        padding: 0;
        margin-right: 1rem;
        border-radius: 2px;
        background-color: white;
        animation: live 1s infinite;
      }
    }

    & > div:last-child {
      font-weight: bold;
    }
  }
}
</style>
