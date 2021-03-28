<demo>常规使用</demo>

<template>
  <div>
    <Button> button </Button>
    <Button theme="link"> link </Button>
    <Button theme="text"> text </Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../lib/index";

export default {
  components: {
    Button,
  },
};
</script>