const code: string =`
<template>
	<div>
		<Button @click="open8">中间显示1</Button>
		<Button @click="open9">中间显示2</Button>
	</div>
</template>

<script lang="ts">
import {openMessage} from '../../lib/openMessage';
import Message from '../lib/Message.vue';
import Button from '../lib/Button.vue';

export default {
	components: { Message, Button },
	setup() {
		const open8 = () => openMessage({type: 'info', text: '中间显示', center: true});
		const open9 = () => openMessage({type: 'warn', text: '中间显示可关闭', center: true, closeable: true});

		return {
		  open8, open9,
			}
	},
}
</script>
`
export default code;

