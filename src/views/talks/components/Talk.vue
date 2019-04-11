<template>
  <md-card :class="isActive ? 'md-primary' : ''"
           class="talk md-no-elevation">
    <md-card-header>
      <div class="md-title">{{ talk.hour }}</div>
      <div class="md-subhead">{{ talk.speakers.join(' & ') }}</div>
    </md-card-header>
    <md-card-content>
      <p>{{ talk.title }}</p>
      <md-chip :class="isActive ? 'md-accent' : ''"
               class="chip">
        {{ talk.format }}
      </md-chip>
      <md-chip :class="isActive ? 'md-accent' : ''"
               class="chip">
        {{ talk.category }}
      </md-chip>
    </md-card-content>
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

<style scoped lang="scss">
.talk {
  width: 300px;
  border-radius: 0;

  .chip {
    font-size: 10px;
    text-transform: uppercase;
  }
}
</style>
