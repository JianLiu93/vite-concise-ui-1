const code: string = `
<template>
	<div>
		<UInput type="password" v-model:value="input" :fieldName="name2" :placeholder="msg2" />
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import UInput from '../lib/UInput.vue';

export default {
	components: { UInput },
	setup() {
		const input = ref('');
		const name2 = '密码';
		const msg2 = '请输入密码';
		return { input, msg2, name2 }
	},
}
</script>
`
export default code;
