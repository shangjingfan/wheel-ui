<template>
  <div>Button 示例</div>
  <h1>示例1-theme</h1>
  <div>
    <Button theme="button"> button </Button>
    <Button theme="link"> link </Button>
    <Button theme="text"> text </Button>
  </div>
  <h1>示例2-size</h1>
  <div>
    <Button size="big"> big </Button>
    <Button size="small"> small </Button>
    <Button> normall </Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log("helo");
    };
    return { onClick };
  },
};
</script>