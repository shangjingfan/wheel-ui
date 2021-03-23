<template>
  <div>
    <p>Tabs 示例</p>
    <h1>示例1</h1>
    <Tabs>
      <Tab title="tab1">tab1</Tab>
      <Tab title="tab2">tab2</Tab>
    </Tabs>
  </div>
</template>
<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
export default {
  components: {
    Tabs,
    Tab,
  },
};
</script>