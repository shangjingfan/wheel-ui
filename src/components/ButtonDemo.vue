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
    <Button size="big"> 大 </Button>
    <Button> 中 </Button>
    <Button size="small"> 小 </Button>
  </div>
  <div>
    <Button theme="link" size="big"> 大 </Button>
    <Button theme="link"> 中 </Button>
    <Button theme="link" size="small"> 小 </Button>
  </div>
  <div>
    <Button theme="text" size="big"> 大 </Button>
    <Button theme="text"> 中 </Button>
    <Button theme="text" size="small"> 小 </Button>
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