<template>
  <div>
    <button v-bind="rest">
      <slot />
    </button>
    <button @mouseover="onMouseover">11223</button>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
  setup(props, context) {
    const { onMouseover, ...rest } = context.attrs;
    return { onMouseover, rest };
  },
};
</script>
<style lang="scss" scoped>
div {
  border: 1px solid blue;
}
</style>