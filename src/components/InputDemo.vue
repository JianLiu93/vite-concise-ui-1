<template>
	<div class="input">
		<h2 class="title">Input 输入框示例</h2>
		<UInput v-model:value="input1" :fieldName="name" :placeholder="msg" />
		<UInput v-model:value="input1" :fieldName="name" :placeholder="msg" disabled />
		<h2 class="title">Input 按钮型示例</h2>
		<UInput type="button" v-model:value="input2" :fieldName="name" :placeholder="msg" />
		<h2 class="title">Input 密码型示例</h2>
		<UInput type="password" v-model:value="input3" :fieldName="name" :placeholder="msg" />
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
		const input3 = ref('');
		const msg = '请输入一段文字';
		const name = '信息';
		return { input1, input2, input3, msg, name }
	},
}
</script>

<style lang="scss" scoped>

</style>