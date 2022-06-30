<template>
	<div class="input">
		<h1>Input 组件文档</h1>
		<h2 class="title">Input 输入框示例</h2>
		<Demo :component="InputDemo1" :code="InputDemo1Code" />
		<h2 class="title">禁用 disable 状态示例</h2>
		<Demo :component="InputDemo2" :code="InputDemo2Code" />
		<h2 class="title">Input 按钮型示例</h2>
		<Demo :component="InputDemo3" :code="InputDemo3Code" />
		<h2 class="title">Input 密码型示例</h2>
		<Demo :component="InputDemo4" :code="InputDemo4Code" />
	</div>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue';
import InputDemo1 from '../components/input/Input.demo1.vue';
import InputDemo2 from '../components/input/Input.demo2.vue';
import InputDemo3 from '../components/input/Input.demo3.vue';
import InputDemo4 from '../components/input/Input.demo4.vue';
import InputDemo1Code from '../components/input/Input.demo1';
import InputDemo2Code from '../components/input/Input.demo2';
import InputDemo3Code from '../components/input/Input.demo3';
import InputDemo4Code from '../components/input/Input.demo4';

export default {
	components: { Demo },
	setup() {
		return {
			InputDemo1, InputDemo1Code,
			InputDemo2, InputDemo2Code,
			InputDemo3, InputDemo3Code,
			InputDemo4, InputDemo4Code,
		}
	},
}
</script>

<style lang="scss" scoped>
.input {
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