const code: string =`
<template>
	<div>
		<Button @click="open1">示例</Button>
	</div>
</template>

<script lang="ts">
import {openMessage} from '../../lib/openMessage';
import Message from '../lib/Message.vue';
import Button from '../lib/Button.vue';

export default {
	components: { Message, Button },
	setup() {

		const open1 = () => openMessage({text: '示例'});
		return { 
		open1,
		}
	},
}
</script>
`
export default code;
