<template>
	<div>
		<Button theme="button" size="normal" disabled @click="onClick">基础按钮</Button>
		<Button level="main" size="normal" disabled @click="onClick">主要按钮</Button>
		<Button level="danger" size="normal" disabled @click="onClick">危险按钮</Button>
		<Button theme="link" size="normal" disabled @click="onClick">链接按钮</Button>
		<Button theme="text" size="normal" disabled @click="onClick">文字按钮</Button>
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
		return {onClick}
	}
}
</script>
