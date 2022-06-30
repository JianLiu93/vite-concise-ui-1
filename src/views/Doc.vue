<template>
	<div class="container" :style="{height:h+'px'}">
	<Topnav class="nav" />
	<div class="content">
		<aside v-if="menuVisible">
			<h2>介绍文档</h2>
			<ul>
				<li><router-link to="/doc/intro">介绍</router-link></li>
				<li><router-link to="/doc/install">安装</router-link></li>
				<li><router-link to="/doc/started">开始使用</router-link></li>
			</ul>
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
		padding-left: 180px;
		@media (max-width: 500px) {
			padding-left: 0;
		}

		>aside {
		  flex-shrink: 0;
		}
		>main {
			flex-grow: 1;
			padding: 16px;
			padding-bottom: 50px;
			background: #fff;
		}
	}
}
aside {
	text-align: left;
	background: #fff;
	width: 180px;
	padding: 16px 0;
	position: fixed;
	left: 0;
	top: 0;
	padding-top: 70px;
  height: 100%;
  z-index: 10;
	border-right: 1px solid #ccc;
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);

	>h2 {
		margin-top: 10px;
		margin-bottom: 10px;
		padding: 0 20px;
	}
	>ul {
		>li {
			>a {
			display: block;
			padding: 4px 16px 4px 40px;
			color: #555;
			}
			a.router-link-active {
			background: #e0fafa;
			border-right: 3px solid #50367f;
			}
		}
	}
}
main {
	overflow: auto;
}
</style>
