<demo>
  单选框
</demo>

<template>
  <Radios>
    <Radio label="1">选项1</Radio>
    <Radio label="2">选项2</Radio>
    <Radio label="3">选项3</Radio>
  </Radios>
</template>

<script lang="ts">
  import Radios from '../lib/Radios.vue';
  import Radio from '../lib/Radio.vue';

  export default {
    components: {
      Radio, Radios
    },
  };
</script>

<style scoped lang="scss">

</style>