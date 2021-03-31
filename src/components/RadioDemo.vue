
<template>
  <br />
  <h2>Radios 单选框</h2>
  <br />
  <Demo :component="Radios1Demo" />
</template>

<script lang="ts">
  import Demo from './Demo.vue';
  import Radios1Demo from '../apply/radios/Radios1Demo.vue';
  export default {
    components:{Demo},
    setup(){
      return {Radios1Demo}
    }
  };
</script>
