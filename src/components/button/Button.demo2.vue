<template>
	<div>
		<Button theme="link" size="big" @click="onClick1">大链接按钮</Button>
		<Button theme="link" size="normal" @click="onClick2">标准链接按钮</Button>
		<Button theme="link" size="small" @click="onClick3">小链接按钮</Button>
	</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
	components: { Button },
	setup() {
		const onClick1 = () => {
			console.log('big');
		}
		const onClick2 = () => {
			console.log('normal');
		}
		const onClick3 = () => {
			console.log('small');
		}
		return {onClick1, onClick2, onClick3 }
	}
}
</script>
