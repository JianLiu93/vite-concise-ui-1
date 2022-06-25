<template>
	<nav class="switch">
		<p>Switch的文档</p>
	</nav>
	<Switch v-model:value="checked"/>
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