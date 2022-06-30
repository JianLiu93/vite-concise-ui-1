<template>
	<div>
		<Button theme="button" size="big" @click="onClick">大按钮</Button>
		<Button theme="button" size="normal" @click="onClick">标准按钮</Button>
		<Button theme="button" size="small" @click="onClick">小按钮</Button>
	</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
	components: { Button },
	setup() {
		const onClick = () => {
			console.log('click');
		}
		return { onClick }
	}
}
</script>

<style lang="scss" scoped>
	.concise-button {
		margin: 0 10px;
	}
</style>