<template>
  <section class="talks">
    <app-loading :label="$t('TALKS.IS_LOADING')"
                 v-if="isLoading">
    </app-loading>

    <app-message :action="getTalks"
                 :message="$t('TALKS.IS_IN_ERROR')"
                 v-else-if="isInError">
    </app-message>

    <app-message :action="getTalks"
                 :message="$t('TALKS.IS_EMPTY')"
                 v-else-if="Object.keys(talks).length === 0">
    </app-message>

    <div class="container"
         v-else>
      <talk :id="talk.hourId"
            :is-active="activeHourId === talk.hourId"
            :key="`talk_${talkId}`"
            :talk="talk"
            v-for="(talk, talkId) in talks">
      </talk>
    </div>
  </section>
</template>

<script>
import AppLoading from '@/components/app-loading/AppLoading';
import AppMessage from '@/components/app-message/AppMessage';
import TalksService from '@/services/TalksService';
import moment from 'moment';
import Talk from './components/Talk';

export default {
  name: 'Talks',
  components: { AppMessage, AppLoading, Talk },
  data() {
    return {
      isLoading: false,
      isInError: false,
      talks: {},
      activeHourId: null,
      timeout: null,
    };
  },
  created() {
    this.getTalks();
    this.setActiveTalks();
  },
  destroyed() {
    window.clearTimeout(this.timeout);
  },
  methods: {
    getTalks() {
      const editionId = this.$route.query.editionId;
      const roomId = this.$route.query.roomId;
      this.isLoading = true;
      this.isInError = false;

      TalksService.findAllForEdition(editionId, roomId)
        .then(talks => {
          this.talks = talks;
          Object.values(this.talks).forEach(talk => talk.hourId = `hour_${moment(talk.hour).format('HHmm')}`);
        })
        .catch(err => {
          console.error(err);
          this.isInError = true;
        })
        .finally(() => this.isLoading = false);
    },
    setActiveTalks() {
      const hourId = `hour_${moment().format('HHmm')}`;
      const talkElement = document.getElementById(hourId);

      if (talkElement !== null && this.activeHourId !== hourId) {
        this.activeHourId = hourId;
        talkElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      }

      this.timeout = window.setTimeout(() => this.setActiveTalks(), 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.talks {
  height: 100%;

  .container {
    display: flex;
    height: inherit;
    overflow-x: auto;
    border-bottom: 1px solid #E0E0E0;

    &::-webkit-scrollbar {
      display: none;
    }

    .talk {
      flex-shrink: 0;
    }

    .talk + .talk {
      border-left: 1px solid #E0E0E0;
    }
  }
}
</style>
