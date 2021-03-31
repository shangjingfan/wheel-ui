<template>
  <div class="wheel-coll">
    <div class="wheel-coll-title" @click="showContent" :class="{visible: visible}">
      {{title}}
      <svg class="icon">
        <use xlink:href="#icon-right"></use>
      </svg>
    </div>
    <transition name="fade">
    <div class="wheel-coll-content" v-if="visible" :class="{visible: visible}">
      <slot/>
    </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import {ref} from 'vue';

  export default {
    props: {
      title: {type: String, required: true}
    },
    setup() {
      let visible = ref(false);
      const showContent = () => {
        visible.value = !visible.value;
      };
      return {showContent, visible};
    }
  };
</script>

<style scoped lang="scss">
  $color: #d9d9d9;
  .wheel-coll {
    padding: 8px 16px;
    border-left: 2px solid $color;
    &-title {
      padding: 8px 8px 8px 0;
      border-bottom: 1px solid #d9d9d9;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        color: #d9d9d9;
        transition: 0.5s;
      }

      &.visible {
        border-bottom: none;

        svg {
          transform: rotate(90deg);
        }
      }

      &:hover {
        cursor: pointer;
        color: #409eff;

        svg {
          color: #409eff;
        }
      }
    }

    &-content {
      padding: 8px 0;
      &.visible {
        border-bottom: 1px solid #d9d9d9;
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>