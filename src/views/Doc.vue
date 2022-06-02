<template>
	<Topnav />
	<div class="content">
		<aside>边栏</aside>
		<aside>主内容</aside>
	</div>
</template>

<style lang="sass" scoped>
  .topnav {border: 1px solid red;}
</style>

<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
	components: {Topnav},
		
}
</script>
