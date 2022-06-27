<template>
	<div class="input">
		<h2 class="title">Message 弹出示例</h2>
		<div>从顶部出现，3 秒后自动消失。</div>
		<Button @click="open1">示例</Button>
		<h2 class="title">不同提示状态示例</h2>
		<Button @click="open2">提示</Button>
		<Button @click="open3">警告</Button>
		<Button level="danger" @click="open4">错误</Button>
		<Button level="main" @click="open5">成功</Button>
		<h2 class="title">可关闭的窗口</h2>
		<Button @click="open6">开启警告</Button>
		<Button level="main" @click="open7">开启成功</Button>
		<h2 class="title">信息中间显示</h2>
		<Button @click="open8">中间显示1</Button>
		<Button @click="open9">中间显示2</Button>
		<h2 class="title">设置信息停留时间</h2>
		<div>可设置信息停留时间，默认为 3 秒消失，设置0则不会消失，需要手动关闭。</div>
		<Button level="main" @click="open10">1 秒停留</Button>
		<Button @click="open11">无限停留: 0</Button>
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import {openMessage} from '../lib/openMessage';
import Message from '../lib/Message.vue';
import Button from '../lib/Button.vue';

export default {
	components: { Message, Button },
	setup() {
		const isShow1 = ref(false);
		const isShow2 = ref(false);
		const isShow3 = ref(false);
		const isShow4 = ref(false);
		const isShow5 = ref(false);

		const open1 = () => openMessage({text: '示例'});
		const open2 = () => openMessage({type: 'info', text: '提示窗口'});
		const open3 = () => openMessage({type: 'warn', text: '警告窗口'});
		const open4 = () => openMessage({type: 'error', text: '错误窗口'});
		const open5 = () => openMessage({type: 'success', text: '成功窗口'});
		const open6 = () => openMessage({type: 'warn', text: '可关闭的警告', closeable: true});
		const open7 = () => openMessage({type: 'success', text: '可关闭的成功', closeable: true});
		const open8 = () => openMessage({type: 'info', text: '中间显示', center: true});
		const open9 = () => openMessage({type: 'warn', text: '中间显示可关闭', center: true, closeable: true});
		const open10 = () => openMessage({type: 'success', text: '停留1秒消失', remain: 1});
		const open11 = () => openMessage({type: 'warn', text: '无限停留可关闭', remain: 0, closeable: true});
		return { isShow1, isShow2, isShow3, isShow4, isShow5,
		open1, open2, open3, open4,open5, open6, open7, open8, open9, open10, open11 }
	},
}
</script>

<style lang="scss" scoped>
.concise-button {
	margin: 10px 16px;
}
</style>