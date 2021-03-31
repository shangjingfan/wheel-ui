<template>
  <div>
    <Radios v-model:selected="x">
      <Radio label="1">选项1</Radio>
      <Radio label="2">选项2</Radio>
      <Radio label="3">选项3</Radio>
    </Radios>
  </div>
</template>

<script lang="ts">
  import Radios from '../lib/Radios.vue';
  import Radio from '../lib/Radio.vue';
  import { ref } from 'vue';

  export default {
    components: {
      Radio, Radios
    },
    setup(){
      const x = ref('3')
      return {x}
    }
  };
</script>
