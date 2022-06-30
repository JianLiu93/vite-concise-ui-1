<template>
	<div>
		<Button theme="link" level="normal" size="normal" @click="onClick1">基础按钮</Button>
		<Button theme="link" level="main" size="normal" @click="onClick2">主要按钮</Button>
		<Button theme="link" level="success" size="normal" @click="onClick4">成功按钮</Button>
		<Button theme="link" level="danger" size="normal" @click="onClick3">危险按钮</Button>
	</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
	components: { Button },
	setup() {
		const onClick1 = () => {
			console.log('normal');
		}
		const onClick2 = () => {
			console.log('main');
		}
		const onClick3 = () => {
			console.log('danger');
		}
		const onClick4 = () => {
			console.log('success');
		}
		return {onClick1, onClick2, onClick3, onClick4 }
	}
}
</script>
