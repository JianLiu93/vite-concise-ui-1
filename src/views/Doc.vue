<template>
	<div class="container" :style="{height:h+'px'}">
	<Topnav class="nav" />
	<div class="content">
		<aside v-if="menuVisible">
			<h2>组件列表</h2>
			<ul>
				<li><router-link to="/doc/switch">Switch组件</router-link></li>
				<li><router-link to="/doc/layout">Layout组件</router-link></li>
				<li><router-link to="/doc/button">Button组件</router-link></li>
				<li><router-link to="/doc/input">Input组件</router-link></li>
				<li><router-link to="/doc/dialog">Dialog组件</router-link></li>
				<li><router-link to="/doc/message">Message组件</router-link></li>
				<li><router-link to="/doc/tabs">Tabs组件</router-link></li>
			</ul>
		</aside>
		<main>
			<router-view />
		</main>
	</div>
	</div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import Topnav from '@/components/Topnav.vue'

export default {
	components: { Topnav },
	setup() {
    	const menuVisible = inject<Ref<boolean>>('menuVisible');
		const h = document.documentElement.clientHeight;
		return { menuVisible, h };
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	.nav {
		flex-shrink: 0;
	}
	> .content {
		flex-grow: 1;
		display: flex;
		padding-top: 60px;
		padding-left: 160px;
		@media (max-width: 500px) {
			padding-left: 0;
		}

		>aside {
		  flex-shrink: 0;
		}
		>main {
			flex-grow: 1;
			padding: 16px;
		}
	}
}
aside {
	background: lightblue;
	width: 150px;
	padding: 16px;
	position: fixed;
	left: 0;
	top: 0;
	padding-top: 70px;

	height: 100%;
	>h2 {
		margin-bottom: 4px;
	}
	>ul {
		>li {
			padding: 4px 0;
		}
	}
}
main {
	overflow: auto;
}
</style>
