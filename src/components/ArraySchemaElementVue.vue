<script setup lang="ts">
import { ref } from 'vue'
import type { SchemaElement } from './about.schema'
import SimpleSchemaElementVue from './SimpleSchemaElementVue.vue'
import SchemaKeyVue from './SchemaKeyVue.vue'
import OpenBracketVue from './OpenBracketVue.vue'
import ClosedBracketVue from './ClosedBracketVue.vue'

const props = withDefaults(
  defineProps<{
    jsonKey: string
    children: SchemaElement[]
    groupLength?: number
    expanded?: boolean
    hasComma?: boolean
  }>(),
  {
    groupLength: 1,
    expanded: false,
    hasComma: false
  }
)

const isExpanded = ref<boolean>(props.expanded)

const handleTogglingExpansion = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="arraySchemaElement">
    <schema-key-vue :json-key="jsonKey" :is-context="false" />:
    <span
      v-if="!isExpanded"
      @click="handleTogglingExpansion"
      class="arraySchemaElement__collapsedArray"
    >
      [...]<span v-if="hasComma">,</span>
    </span>
    <span v-else
      ><open-bracket-vue :is-square="true" />
      <div
        class="arraySchemaElement__group"
        v-for="(child, index) in children"
        :key="child.key + Math.floor(Math.random() * 9999)"
      >
        <div v-if="index % groupLength === 0"><open-bracket-vue /></div>
        <simple-schema-element-vue
          v-if="typeof child.value === 'string'"
          :json-key="child.key"
          :json-value="child.value"
          :is-context="child.isContext"
          :has-comma="index + 1 !== children.length"
        ></simple-schema-element-vue>
        <div v-if="(index + 1) % groupLength === 0 && index !== 0">
          <closed-bracket-vue /><span v-if="index + 1 !== children.length">,</span>
        </div>
      </div>
      <closed-bracket-vue :is-square="true" /><span v-if="hasComma">,</span>
    </span>
  </div>
</template>

<style scoped lang="scss">
.arraySchemaElement {
  padding-left: 2ch;

  &__group {
    padding-left: 2ch;
  }

  &__collapsedArray {
    cursor: pointer;
    color: #999;
    transition: all 0.3s;

    &:hover {
      color: #333;
    }
  }
}
</style>
