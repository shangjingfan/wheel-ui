<template>
  <br />
  <h2>Button 按钮</h2>
  <br />

  <Demo :component="Button1Demo" />
  <Demo :component="Button2Demo" />
  <Demo :component="Button4Demo" />
  <Demo :component="Button5Demo" />
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "../apply/button/Button1.demo.vue";
import Button2Demo from "../apply/button/Button2.demo.vue";
import Button4Demo from "../apply/button/Button4.demo.vue";
import Button5Demo from "../apply/button/Button5.demo.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return { Button1Demo, Button2Demo, Button4Demo, Button5Demo };
  },
};
</script>