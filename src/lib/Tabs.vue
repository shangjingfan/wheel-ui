<template>
  <div>Tabs组件</div>
</template>
<script lang="ts">
import Tag from "./Tab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tag) {
        throw new Error("应该使用Tag组件");
      }
    });
    return { defaults };
  },
};
</script>