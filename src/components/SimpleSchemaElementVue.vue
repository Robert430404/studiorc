<script setup lang="ts">
import SchemaKeyVue from './SchemaKeyVue.vue'

withDefaults(
  defineProps<{
    jsonKey: string
    jsonValue: string
    isContext: boolean
    hasComma?: boolean
  }>(),
  {
    hasComma: true
  }
)

const isUrl = (value: string): boolean => {
  try {
    new URL(value)

    return true
  } catch (e) {
    return false
  }
}

const shouldHaveEmphasis = (value: string): boolean => {
  try {
    const url = new URL(value)

    if (url.hostname.includes('schema.org')) {
      return false
    }

    return true
  } catch (e) {
    return false
  }
}
</script>

<template>
  <span class="simpleSchemaElement">
    <schema-key-vue :json-key="jsonKey" :is-context="isContext" />:
    <a
      v-if="isUrl(jsonValue)"
      target="_blank"
      :href="jsonValue"
      :class="{
        simpleSchemaElement__value: true,
        'simpleSchemaElement__value--muted': isContext,
        simpleSchemaElement__link: true,
        'simpleSchemaElement__link--emphasize': shouldHaveEmphasis(jsonValue)
      }"
    >
      "{{ jsonValue }}"</a
    >
    <span
      v-else
      :class="{
        simpleSchemaElement__value: true,
        'simpleSchemaElement__value--muted': isContext
      }"
    >
      "{{ jsonValue }}"</span
    ><span v-if="hasComma">,</span>
  </span>
</template>

<style scoped lang="scss">
.simpleSchemaElement {
  padding-left: 2ch;

  &__value {
    color: #0e0;

    &--muted {
      color: #080;
    }
  }

  &__link {
    color: #888;
    font-style: italic;

    &--emphasize {
      color: #eee;
    }
  }
}
</style>
