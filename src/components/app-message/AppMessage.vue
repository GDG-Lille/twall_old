<template>
  <div class="app-message">
    <md-empty-state :md-label="message">
      <md-button @click="action"
                 class="md-primary">
        {{ $t('ACTIONS.RETRY') }}
      </md-button>
    </md-empty-state>
  </div>
</template>

<script>
export default {
  name: 'AppMessage',
  props: {
    message: {
      type: String,
      default: null,
    },
    action: {
      type: Function,
      default: () => ({}),
    },
  },
};
</script>
