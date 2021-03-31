<template>
  <div class="topnav">
    <router-link to="/" class="logo" @click="toggleAside">
      <svg class="icon">
        <use xlink:href="#icon-wheel"></use>
      </svg>
    </router-link>
    <ol class="menu">
      <li>
        <router-link to="/doc/intro">文档</router-link>
      </li>
    </ol>
    <svg
      v-if="toggleMenuButtonVisible"
      class="toggleAside"
      @click="toggleAside"
    >
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    props: {
      toggleMenuButtonVisible: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible'); //get
      const toggleAside = () => {
        asideVisible.value = !asideVisible.value;
      };
      return {toggleAside};
    },
  };
</script>
<style lang="scss" scoped>
  $color: #030507;
  .topnav {
    background: #b6dff9;
    color: $color;
    display: flex;
    padding: 16px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 20;
    justify-content: center;
    align-items: center;

    > .logo {
      max-width: 6em;
      margin-right: auto;

      > svg {
        width: 32px;
        height: 32px;
        animation: wheel 2500ms infinite linear;
        &:hover{

        }
      }

    }

    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      > li {
        &:hover {
          color: blue;
        }

        margin: 0 1em;
      }
    }

    > .toggleAside {
      display: inline-block;
      width: 32px;
      height: 32px;
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

  @keyframes wheel {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>