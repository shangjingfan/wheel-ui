<template>
  <div>Button 示例</div>
  <h1>示例1-theme</h1>
  <div>
    <Button> button </Button>
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
  <h1>示例3-level</h1>
  <div>
    <Button level="main"> 主要按钮 </Button>
    <Button> 普通按钮 </Button>
    <Button level="danger"> 危险按钮 </Button>
  </div>
  <div>
    <Button theme="link" level="main"> 主要link按钮 </Button>
    <Button theme="link"> 普通link按钮 </Button>
    <Button theme="link" level="danger"> 危险link按钮 </Button>
  </div>
  <div>
    <Button theme="text" level="main"> 主要text按钮 </Button>
    <Button theme="text"> 普通text按钮 </Button>
    <Button theme="text" level="danger"> 危险text按钮 </Button>
  </div>
  <h1>示例4-disabled</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
  </div>
  <h1>示例5-loading</h1>
  <div>
    <Button loading>加载中</Button>
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