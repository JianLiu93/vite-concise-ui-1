<template>
	<div class="dialog">
		<h1>Dialog 组件文档</h1>
		<h2 class="title">Dialog 对话框示例</h2>
		<Demo :component="DialogDemo1" :code="DialogDemo1Code" />
		<h2 class="title">点击框外无法关闭</h2>
		<div class="text">如果想要点击框外无法关闭，需要设置 closeOnClickMask 属性为 false。</div>
		<Demo :component="DialogDemo2" :code="DialogDemo2Code" />
		<h2 class="title">Dialog TS代码执行示例</h2>
		<div class="text">注意，需要引入 h 函数 和 openDialog 函数，并按格式设置好各项参数。</div>
		<Demo :component="DialogDemo3" :code="DialogDemo3Code" />
	</div>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue';
import DialogDemo1 from '../components/dialog/Dialog1.demo1.vue';
import DialogDemo2 from '../components/dialog/Dialog1.demo2.vue';
import DialogDemo3 from '../components/dialog/Dialog1.demo3.vue';
import DialogDemo1Code from '../components/dialog/Dialog1.demo1';
import DialogDemo2Code from '../components/dialog/Dialog1.demo2';
import DialogDemo3Code from '../components/dialog/Dialog1.demo3';

export default {
	components: { Demo },
	setup() {
		// const showDialog = () => {
		// 	openDialog({
		// 		title: h('strong', {}, '开发者'),
		// 		content: '相信自己，你很帅',
		// 		OK() {
		// 			console.log('OK');
		// 		},
		// 		cancel() {
		// 			console.log('cancel');
		// 		}
		// 	});
		// }
		return {
			DialogDemo1, DialogDemo1Code,
			DialogDemo2, DialogDemo2Code,
			DialogDemo3, DialogDemo3Code,
		}
	},
}
</script>

<style lang="scss" scoped>
.dialog {
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