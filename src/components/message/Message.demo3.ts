const code: string =`
<template>
	<div>
		<Button @click="open6">开启警告</Button>
		<Button level="main" @click="open7">开启成功</Button>
	</div>
</template>

<script lang="ts">
import {openMessage} from '../../lib/openMessage';
import Message from '../lib/Message.vue';
import Button from '../lib/Button.vue';

export default {
	components: { Message, Button },
	setup() {
		const open6 = () => openMessage({type: 'warn', text: '可关闭的警告', closeable: true});
		const open7 = () => openMessage({type: 'success', text: '可关闭的成功', closeable: true});
		return {
			open6, open7,
		}
	},
}
</script>
`
export default code;

