<template>
  <md-card :class="isActive ? 'md-primary' : ''"
           class="talk md-no-elevation">
    <md-card-header>
      <div class="md-title">{{ talk.hour | date('HH:mm') }}</div>
      <div class="md-subhead">{{ talk.speakers.join(' & ') }}</div>
    </md-card-header>
    <md-card-content>
      <p>{{ talk.title | ellipsis(75) }}</p>
    </md-card-content>
    <md-card-actions md-alignment="left">
      <md-chip :class="isActive ? 'md-accent' : ''"
               class="chip"
               v-if="talk.format">
        {{ talk.format }}
      </md-chip>
      <md-chip :class="isActive ? 'md-accent' : ''"
               class="chip"
               v-if="talk.category">
        {{ talk.category }}
      </md-chip>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'Talk',
  props: {
    talk: {
      type: Object,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.talk {
  width: 300px;
  border-radius: 0;

  .chip {
    font-size: 10px;
    text-transform: uppercase;
  }
}
</style>
