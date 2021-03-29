<template>
  <button class="wheel-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="wheel-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`wheel-theme-${theme}`]: theme,
        [`wheel-size-${size}`]: size,
        [`wheel-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$main: #6190e8;
$success: #13ce66;
$danger: #ff4949;
$warning: #ffc82c;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.wheel-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;

  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.wheel-theme-main {
    border-color: transparent;
    box-shadow: none;
    color: white;
    background: $main;
    &:hover,
    &:focus {
      background: lighten($main, 5%);
    }
  }
  &.wheel-theme-main {
    border-color: transparent;
    box-shadow: none;
    color: white;
    background: $main;
    &:hover,
    &:focus {
      background: lighten($main, 8%);
    }
  }
  &.wheel-theme-success {
    border-color: transparent;
    box-shadow: none;
    color: white;
    background: $success;
    &:hover,
    &:focus {
      background: lighten($success, 8%);
    }
  }
  &.wheel-theme-danger {
    border-color: transparent;
    box-shadow: none;
    color: white;
    background: $danger;
    &:hover,
    &:focus {
      background: lighten($danger, 8%);
    }
  }
  &.wheel-theme-warning {
    border-color: transparent;
    box-shadow: none;
    color: white;
    background: $warning;
    &:hover,
    &:focus {
      background: lighten($warning, 8%);
    }
  }

  &.wheel-size-big {
    font-size: 24px;
    height: 44px;
    padding: 0 16px;
  }
  &.wheel-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &[disabled] {
    cursor: not-allowed;
    color: $grey;
    &:hover {
      border-color: rgb(217, 217, 217);
    }
    &.wheel-theme-main {
      border-color: rgb(217, 217, 217);
      color: white;
      background: lighten($main, 20%);
    }
    &.wheel-theme-success {
      border-color: rgb(217, 217, 217);
      color: white;
      background: lighten($success, 20%);
    }
    &.wheel-theme-danger {
      border-color: rgb(217, 217, 217);
      color: white;
      background: lighten($danger, 20%);
    }
    &.wheel-theme-warning {
      border-color: rgb(217, 217, 217);
      color: white;
      background: lighten($warning, 20%);
    }
  }
  > .wheel-loadingIndicator {
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 4px;
    border-color: rgb(182, 177, 177);
    border-style: dashed;
    border-width: 2px;
    animation: wheel-spin 1s infinite linear;
  }
}
@keyframes wheel-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>