<script setup lang="ts">
defineProps<{
  jsonKey: string
  isContext: boolean
}>()
</script>

<template>
  <span
    :class="{
      schemaKey: true,
      'schemaKey--context': isContext
    }"
  >
    "{{ jsonKey }}"
  </span>
</template>

<style scoped lang="scss">
.schemaKey {
  color: #00ff6a;
  font-weight: bold;

  &--context {
    color: #080;
  }
}
</style>
