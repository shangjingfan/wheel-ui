<template>
  <br />
  <h2>Dialog 对话框</h2>
  <br />
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "../apply/dialog/Dialog1Demo.vue";
import Dialog2Demo from "../apply/dialog/Dialog2Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
    };
  },
};
</script>