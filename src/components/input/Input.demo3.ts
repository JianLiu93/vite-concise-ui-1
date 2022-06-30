const code: string = `
<template>
	<div>
		<UInput type="button" v-model:value="input2" :fieldName="name" :placeholder="msg" />
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import UInput from '../lib/UInput.vue';

export default {
	components: { UInput },
	setup() {
		const input2 = ref('');
		const name = '信息';
		const msg = '请输入一段文字';
		return { input2, msg, name }
	},
}
</script>
`
export default code;
