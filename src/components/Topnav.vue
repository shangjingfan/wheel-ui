<template>
  <div class="topnav">
    <div class="logo" @click="toggleAside">
      <svg class="icon">
        <use xlink:href="#icon-wheel"></use>
      </svg>
    </div>
    <ol class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ol>
    <span class="toggleAside" @click="toggleAside"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); //get
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  // box-shadow: 0 0px 5px 2px rgba(0, 0, 0, 0.1);
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>