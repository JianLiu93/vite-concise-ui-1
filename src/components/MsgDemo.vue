<template>
	<div class="message">
		<h1>Message 组件文档</h1>
		<h2 class="title">Message 消息框弹出示例</h2>
		<div class="text">从顶部出现，3 秒后自动消失。</div>
		<Demo :component="MessageDemo1" :code="MessageDemo1Code" />
		<h2 class="title">不同提示状态消息示例</h2>
		<div class="text">有四种基本类型的消息提示反馈。</div>
		<Demo :component="MessageDemo2" :code="MessageDemo2Code" />
		<h2 class="title">可手动关闭的消息窗口</h2>
		<Demo :component="MessageDemo3" :code="MessageDemo3Code" />
		<h2 class="title">消息中间显示</h2>
		<Demo :component="MessageDemo4" :code="MessageDemo4Code" />
		<h2 class="title">设置信息停留时间</h2>
		<div class="text">可设置信息停留时间，通过 remain 参数。默认为 3 秒消失，设置 0 则不会消失，需要手动关闭。</div>
		<Demo :component="MessageDemo5" :code="MessageDemo5Code" />
	</div>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue';
import MessageDemo1 from '../components/message/Message.demo1.vue';
import MessageDemo2 from '../components/message/Message.demo2.vue';
import MessageDemo3 from '../components/message/Message.demo3.vue';
import MessageDemo4 from '../components/message/Message.demo4.vue';
import MessageDemo5 from '../components/message/Message.demo5.vue';
import MessageDemo1Code from '../components/message/Message.demo1';
import MessageDemo2Code from '../components/message/Message.demo2';
import MessageDemo3Code from '../components/message/Message.demo3';
import MessageDemo4Code from '../components/message/Message.demo4';
import MessageDemo5Code from '../components/message/Message.demo5';

export default {
	components: { Demo },
	setup() {
		return {
			MessageDemo1, MessageDemo1Code,
			MessageDemo2, MessageDemo2Code,
			MessageDemo3, MessageDemo3Code,
			MessageDemo4, MessageDemo4Code,
			MessageDemo5, MessageDemo5Code,
		}
	},
}
</script>

<style lang="scss" scoped>
.message {
  >h1 {
    padding: 8px 16px;
		border-bottom: 1px solid #d8dee4;
		margin-bottom: 16px;
  }
  >h2 {
    padding: 8px 16px;
  }
	>.text {
    padding: 8px 20px;
		color: #333;
	}
}
</style>