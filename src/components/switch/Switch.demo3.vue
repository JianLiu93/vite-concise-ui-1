<template>
	<div>
		<Switch v-model:value="toggle1" />
		<Switch v-model:value="toggle2" disable />
		<Switch v-model:value="toggle3" disable />
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from '../../lib/Switch.vue';

export default {
	components: { Switch },
	setup() {
		const toggle1 = ref(false);
		const toggle2 = ref(false);
		const toggle3 = ref(true);
		return { toggle1, toggle2, toggle3 }
	}
}
</script>
