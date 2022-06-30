const code: string = `
<template>
	<div>
		<Switch v-model:value="toggle1" size="small" />
		<Switch v-model:value="toggle2" size="normal" />
		<Switch v-model:value="toggle3" size="big" />
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
		const toggle3 = ref(false);
		return { toggle1, toggle2, toggle3 }
	}
}
</script>
`
export default code;
