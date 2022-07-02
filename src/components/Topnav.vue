<template>
	<nav class="topnav">
    <router-link to="/" class="logo">
			<Icon name="logo" size="40px" />
    </router-link>
		<ul class="menu">
      <li>
      <router-link to="/doc">文档</router-link>
      </li>
      <li>
      <a href="https://github.com/JianLiu93/vite-concise-ui-1">GitHub</a>
      </li>
		</ul>
		<span class="toggleAside" @click="toggleMenu">
			<Icon name="menu" size="32px" />
    </span>
	</nav>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
export default {
	setup() {
		const menuVisible = inject<Ref<boolean>>('menuVisible') || {value: true};
		const toggleMenu = () => {
			menuVisible.value = !menuVisible.value;
		};
		return {toggleMenu};
	},
}
</script>


<style lang="scss" scoped>
$bg:#c1e5e5;
$color: #007974;

.topnav {
  color: $color;
  background: $bg;
  display: flex;
  padding: 6px 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 30;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 80px;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      >a:hover {
        border-bottom: 1px solid #666;
      }
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    // background: fade_out(black, 0.9);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
      cursor: pointer;
    }
  }
}
</style>