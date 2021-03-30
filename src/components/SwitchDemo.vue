<template>
  <br />
  <h2>Switch 开关</h2>
  <br />
  <Demo :component="Switch1Demo" />
  <Demo :component="Switch2Demo" />
</template>
<script lang="ts">
import Switch1Demo from "../apply/switch/Switch1.demo.vue";
import Switch2Demo from "../apply/switch/Switch2.demo.vue";

import Demo from "../components/Demo.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return { Switch1Demo, Switch2Demo };
  },
};
</script>
