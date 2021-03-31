<template>
  <div>
    Radios组件
    <div v-for="t in defaults">
      <component :is="t"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Radio from './Radio.vue';

  export default {
    props: ['selected'],
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach(t=> {
        if(t.type !== Radio){
          throw new Error('请使用Radio标签')
        }
      })
      return {defaults}
    }
  };
</script>

<style scoped lang="scss">

</style>