<demo>
  禁用按钮
</demo>
<template>
  <div>
    <Button disabled> 默认按钮 </Button>
    <Button theme="main" disabled> 主要按钮 </Button>
    <Button theme="success" disabled> 成功按钮 </Button>
    <Button theme="warning" disabled> 警告按钮 </Button>
    <Button theme="danger" disabled> 危险按钮 </Button>
  </div>
</template>
<script lang="ts">
import { Button } from "../../lib";

export default {
  components: {
    Button,
  },
};
</script>