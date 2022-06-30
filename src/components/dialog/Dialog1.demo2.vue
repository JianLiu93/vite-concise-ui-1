<template>
	<div>
		<Button @click="toggle">框外无法关闭</Button>
		<Dialog v-model:visible="isShow" :closeOnClickMask="false" :OK="fn1" :cancel="fn2">
			<template v-slot:title>
				<strong>Dialog 对话框</strong>
			</template>
			<template v-slot:content>
				<div>欢迎使用，点击框外关闭不了哦</div>
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
