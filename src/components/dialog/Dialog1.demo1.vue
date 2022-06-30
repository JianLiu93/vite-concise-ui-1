<template>
	<div>
		<Button @click="toggle">点击对话</Button>
		<Dialog v-model:visible="isShow" :OK="fn1" :cancel="fn2">
			<template v-slot:title>
				<strong>Dialog 对话框</strong>
			</template>
			<template v-slot:content>
				<strong>您好</strong>
				<div>欢迎使用concise-UI!</div>
			</template>
		</Dialog>
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from '../../lib/Button.vue';
import Dialog from '../../lib/Dialog.vue';

export default {
	components: { Button, Dialog },
	setup() {
		const isShow = ref(false);
		const toggle = () => {
			isShow.value = !isShow.value;
		}
		const fn1 = () => {	console.log('OK'); }
		const fn2 = () => {	console.log('cancel'); }

		return { isShow, toggle, fn1, fn2 }
	}
}
</script>
