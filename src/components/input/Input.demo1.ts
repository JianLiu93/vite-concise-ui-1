const code: string = `
<template>
	<div>
		<UInput v-model:value="input1" :fieldName="name" :placeholder="msg" />
		<UInput v-model:value="input2" :fieldName="name" :placeholder="msg" width="100%" />
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import UInput from '../lib/UInput.vue';

export default {
	components: { UInput },
	setup() {
		const input1 = ref('');
		const input2 = ref('');
		const name = '信息';
		const msg = '请输入一段文字';
		return { input1, input2, msg, name }
	},
}
</script>
`
export default code;
