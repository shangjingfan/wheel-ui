<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button> 默认 </Button>
    <Button theme="button"> button </Button>
    <Button theme="link"> link </Button>
    <Button theme="text"> text </Button>
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