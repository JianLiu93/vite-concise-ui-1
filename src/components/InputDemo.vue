<template>
	<div class="input">
		<h2 class="title">Input 输入框示例</h2>
		<UInput v-model:value="input1" :fieldName="name" :placeholder="msg" />
		<UInput v-model:value="input1" :fieldName="name" :placeholder="msg" width="100%" />
		<h2 class="title">Input disable 示例</h2>
		<UInput v-model:value="input1" :fieldName="name" :placeholder="msg" disabled />
		<h2 class="title">Input 按钮型示例</h2>
		<UInput type="button" v-model:value="input2" :fieldName="name" :placeholder="msg" />
		<h2 class="title">Input 密码型示例</h2>
		<UInput type="password" v-model:value="input3" :fieldName="name2" :placeholder="msg2" />
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
		const name = '信息';
		const name2 = '密码';
		const msg = '请输入一段文字';
		const msg2 = '请输入密码';
		return { input1, input2, input3, msg, msg2, name, name2 }
	},
}
</script>

<style lang="scss" scoped>

</style>