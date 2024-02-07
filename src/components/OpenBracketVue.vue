<script setup lang="ts">
withDefaults(defineProps<{ isSquare?: boolean }>(), { isSquare: false })
</script>

<template>
  <span class="openBracket">{{ isSquare ? '[' : '{' }}</span>
</template>

<style scoped lang="scss">
.openBracket {
  color: #777;
}
</style>
