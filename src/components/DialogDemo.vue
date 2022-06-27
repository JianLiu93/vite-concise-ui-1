<template>
	<div class="dialog">
		<h2 class="title">Dialog 对话框示例</h2>
		<Button @click="toggle">toggle 切换</Button>
		<Dialog v-model:visible="isShow" :closeOnClickMask="false" :OK="fn1" :cancel="fn2">
			<template v-slot:title>
				<strong>Dialog 对话框</strong>
			</template>
			<template v-slot:content>
				<strong>您好</strong>
				<div>欢迎使用concise-UI!</div>
			</template>
		</Dialog>
		<h2 class="title">Dialog TS代码执行示例</h2>
		<Button @click="showDialog">show</Button>
	</div>
</template>

<script lang="ts">
import { ref, h } from 'vue';
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
import { openDialog } from '../lib/openDialog';

export default {
	components: { Button, Dialog },
	setup() {
		const isShow = ref(false);
		const toggle = () => {
			isShow.value = !isShow.value;
		}
		const fn1 = () => {
			return true;
		}
		const fn2 = () => {};
		const showDialog = () => {
			openDialog({
				title: h('strong', {}, '开发者'),
				content: '相信自己，你很帅',
				OK() {
					console.log('OK');
				},
				cancel() {
					console.log('cancel');
				}
			});
		}
		return { isShow, toggle, fn1, fn2, showDialog };
	},
}
</script>

<style lang="scss" scoped>

</style>