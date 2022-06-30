<template>
	<div>
		<Button level="main" @click="open10">1 秒停留</Button>
		<Button @click="open11">无限停留: 0</Button>
	</div>
</template>

<script lang="ts">
import {openMessage} from '../../lib/openMessage';
import Message from '../../lib/Message.vue';
import Button from '../../lib/Button.vue';

export default {
	components: { Message, Button },
	setup() {
		const open10 = () => openMessage({type: 'success', text: '停留1秒消失', remain: 1});
		const open11 = () => openMessage({type: 'warn', text: '无限停留可关闭', remain: 0, closeable: true});
		return { open10, open11 }
	},
}
</script>

<style lang="scss" scoped>
	.concise-button {
		margin: 10px 16px;
	}
</style>