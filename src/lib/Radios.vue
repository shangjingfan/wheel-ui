<template>
  <div class="wheel-radios">
    <div class="wheel-radios-item"
         v-for="(t, index) in defaults"
         :key="index"
         :class="{selected: selected=== t.props.label}"
         @click="select(t.props.label)">
      <span></span>
      <component :is="t" />
    </div>
  </div>
</template>

<script lang="ts">
  import Radio from './Radio.vue';

  export default {
    props: ['selected'],
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach(t => {
        if (t.type !== Radio) {
          throw new Error('请使用Radio标签');
        }
      });
      const select = (label) => {
        context.emit('update:selected', label);
      };
      return {defaults, select};
    }
  };
</script>

<style scoped lang="scss">
  $h: 16px;
  .wheel-radios {
    display: flex;
    align-items: center;
    &-item {
      border: 1px solid blue;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 8px;
      > span{
        display: inline-block;
        border: 1px solid #e4e6ec;
        width: $h;
        height: $h;
        border-radius: 50%;
        margin-right: 4px;
        transition: border 0.5s
      }
      &:hover{
        cursor: pointer;
        > span{
          border: 2px solid blue;
        }
      }
    }
    .selected {
      color: blue;
      > span{
        border: 6px solid blue;
      }
    }
  }



</style>