<template>
  <br />
  <h2>Collapse 折叠面板</h2>
  <br />
  <Demo :component="Collapse1Demo" />
</template>

<script lang="ts">
  import Demo from './Demo.vue';
  import Collapse1Demo from '../apply/collapse/Collapse1Demo.vue';
  export default {
    components:{Demo},
    setup(){
      return {Collapse1Demo}
    }
  };
</script>

<style scoped lang="scss">

</style>