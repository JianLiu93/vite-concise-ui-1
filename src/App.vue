<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from 'vue';
import { router } from './router';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false: true);
    provide('menuVisible', menuVisible);

    router.afterEach(() => {
      if(width <= 500) {
        menuVisible.value = false;
      }
    });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
