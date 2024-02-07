<script setup lang="ts">
withDefaults(defineProps<{ isSquare?: boolean }>(), { isSquare: false })
</script>

<template>
  <span class="closedBracket">{{ isSquare ? ']' : '}' }}</span>
</template>

<style scoped lang="scss">
.closedBracket {
  color: #777;
}
</style>
