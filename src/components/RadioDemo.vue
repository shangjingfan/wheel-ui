<template>
  <div>
    <Radios :selected="x">
      <Radio label="1">选项1</Radio>
      <Radio label="2">选项2</Radio>
      <Radio label="3">选项3</Radio>
    </Radios>
  </div>
</template>

<script lang="ts">
  import Radios from '../lib/Radios.vue';
  import Radio from '../lib/Radio.vue';

  export default {
    components: {
      Radio, Radios
    },
    setup(){
      const x = '2'
      return {x}
    }
  };
</script>
