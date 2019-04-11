<template>
  <div class="app-loading">
    <md-progress-bar class="md-accent"
                     md-mode="indeterminate">
    </md-progress-bar>
    <p>{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: 'AppLoading',
  props: {
    label: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped lang="scss">
.app-loading {
  p {
    padding: 0 1rem;
    font-weight: bold;
  }
}
</style>
