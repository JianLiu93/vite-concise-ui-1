const code: string =`
<template>
	<div>
		<Button @click="open2">提示</Button>
		<Button @click="open3">警告</Button>
		<Button level="danger" @click="open4">错误</Button>
		<Button level="main" @click="open5">成功</Button>
	</div>
</template>

<script lang="ts">
import {openMessage} from '../../lib/openMessage';
import Message from '../lib/Message.vue';
import Button from '../lib/Button.vue';

export default {
	components: { Message, Button },
	setup() {
		const open2 = () => openMessage({type: 'info', text: '提示窗口'});
		const open3 = () => openMessage({type: 'warn', text: '警告窗口'});
		const open4 = () => openMessage({type: 'error', text: '错误窗口'});
		const open5 = () => openMessage({type: 'success', text: '成功窗口'});
		return {
		open2, open3, open4,open5
		}
	},
}
</script>
`
export default code;

