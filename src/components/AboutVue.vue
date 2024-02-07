<script setup lang="ts">
import { getIterableSchema } from './about.schema'
import ArraySchemaElementVue from './ArraySchemaElementVue.vue'
import SimpleSchemaElementVue from './SimpleSchemaElementVue.vue'

const elements = getIterableSchema()
</script>

<template>
  <section class="about">
    <span class="about__bracket about__bracket--open">{</span>
    <div
      class="about__record about__record--indent"
      v-for="(element, index) in elements"
      :key="element.key"
    >
      <simple-schema-element-vue
        v-if="typeof element.value === 'string'"
        :json-key="element.key"
        :json-value="element.value"
        :is-context="element.isContext"
      ></simple-schema-element-vue>
      <array-schema-element-vue
        v-else-if="Array.isArray(element.value)"
        :json-key="element.key"
        :children="element.value"
        :group-length="element.value.length < 4 ? element.value.length : 4"
        :expanded="['identifier'].includes(element.key)"
        :has-comma="index + 1 !== elements.length"
      ></array-schema-element-vue>
    </div>
    <span class="about__bracket about__bracket--closed">}</span>
  </section>
</template>

<style scoped lang="scss">
.about {
  font-size: 1.25em;

  &__bracket {
    color: #777;
  }
}
</style>
