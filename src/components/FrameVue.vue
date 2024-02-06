<script setup lang="ts">
import AboutVue from './AboutVue.vue'
</script>

<template>
  <div class="frame">
    <h1 class="frame__heading">Studio RC</h1>
    <about-vue></about-vue>
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
}
</style>
