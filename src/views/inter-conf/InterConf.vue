<template>
  <section class="inter-conf">
    <div>
      <router-view name="talks"></router-view>
    </div>
    <div>
      <router-view name="tweets"></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InterConf',
};
</script>

<style scoped lang="scss">
.inter-conf {
  display: flex;
  flex-direction: column;

  height: 100%;

  div:first-child {
    flex: 0.3;
  }

  div:last-child {
    flex: 1;
    overflow: hidden;
  }
}
</style>
