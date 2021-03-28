<demo>
  一键打开Dialog
</demo>

<template>
  <div>
    <Button @click="showDialog">show</Button>
  </div>
</template>
<script lang="ts">
import { Button, openDialog } from "../lib/index";
import { h } from "vue";

export default {
  comments: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好2",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
        closeOnClickOverlay: false,
      });
    };
    return {
      showDialog,
    };
  },
};
</script>