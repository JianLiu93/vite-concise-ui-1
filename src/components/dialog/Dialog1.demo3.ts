const code: string = `
<template>
	<div class="button">
		<Button @click="showDialog">开启对话</Button>
	</div>
	<div>
		<Button @click="showDialog2">框外无法关闭的对话</Button>
	</div>
</template>

<script lang="ts">
import { ref, h } from 'vue';
import Button from '../../lib/Button.vue';
import Dialog from '../../lib/Dialog.vue';
import { openDialog } from '../../lib/openDialog';

export default {
	components: { Button, Dialog },
	setup() {
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
		const showDialog2 = () => {
			openDialog({
				title: h('strong', {}, '开发者'),
				content: '点击框外关闭不了哦',
				closeOnClickMask: false,
				OK() {
					console.log('OK');
				},
				cancel() {
					console.log('cancel');
				}
			});
		}
		return { showDialog, showDialog2 }
	}
}
</script>

<style lang="scss" scoped>
div.button {
	margin-bottom: 10px;
}
</style>
`
export default code;