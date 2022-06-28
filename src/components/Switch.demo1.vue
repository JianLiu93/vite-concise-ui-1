<template>
	<div class="switch">
		<h2>Switch 组件基本示例</h2>
		<div><Switch v-model:value="checked"/></div>
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';

export default {
	components: { Switch },
	setup() {
		const checked = ref(false);
		return { checked };
	}

}
</script>

<style lang="scss" scoped>
</style>