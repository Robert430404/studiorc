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
    <button
      :class="{
        arraySchemaElement__toggle: true,
        'arraySchemaElement__toggle--expanded': isExpanded
      }"
      @click="handleTogglingExpansion"
    ></button>
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
  position: relative;
  padding-left: 2ch;

  &__toggle {
    position: absolute;
    left: 0;
    top: 4px;
    height: 12px;
    width: 12px;
    text-align: center;
    font-weight: bold;
    color: #999;
    background: transparent;
    padding: 0;
    margin: 0;
    border: 1px solid #999;
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s;

    &:hover {
      opacity: 0.25;
    }

    &:before {
      content: ' ';
      position: absolute;
      top: calc(50% - 1px);
      left: 0;
      height: 2px;
      width: 10px;
      background: #999;
    }

    &:after {
      content: ' ';
      position: absolute;
      top: 0;
      left: calc(50% - 1px);
      height: 10px;
      width: 2px;
      background: #999;
    }

    &--expanded:after {
      display: none;
    }

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

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
