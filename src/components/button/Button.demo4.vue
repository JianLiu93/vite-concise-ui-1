<template>
	<div>
		<Button theme="text" size="big" @click="onClick">大文字按钮</Button>
		<Button theme="text" size="normal" @click="onClick">标准文字按钮</Button>
		<Button theme="text" size="small" @click="onClick">小文字按钮</Button>
	</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
	components: { Button },
	setup() {
		const onClick = () => {
			console.log('text');
		}
		return {onClick}
	}
}
</script>
