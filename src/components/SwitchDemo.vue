<template>
  <Demo :component="Switch1Demo" />
  <Demo :component="Switch2Demo" />
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
import Button from "../lib/Button.vue";
import Switch1Demo from "../components/Switch1.demo.vue";
import Switch2Demo from "../components/Switch2.demo.vue";
import "prismjs";
import "prismjs/themes/prism.css";
const Prism = (window as any).Prism;

import Demo from "../components/Demo.vue";

export default {
  components: {
    Switch,
    Button,
    Demo,
  },
  setup() {
    const bool = ref(false);
    return { bool, Switch1Demo, Switch2Demo, Prism };
  },
};
</script>
