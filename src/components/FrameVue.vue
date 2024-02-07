<script setup lang="ts">
import AboutVue from './AboutVue.vue'
</script>

<template>
  <div class="frame">
    <div class="frame__contents">
      <h1 class="frame__heading">Response - [GET] 200 text/html</h1>
      <about-vue></about-vue>
    </div>
  </div>
</template>

<style scoped lang="scss">
.frame {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  justify-content: center;
  padding: 24px;

  &__contents {
    max-width: 800px;
    display: flex;
    gap: 24px;
    flex-direction: column;
  }

  &__heading {
    font-family: 'Courier New', Courier, monospace;
  }
}
</style>
