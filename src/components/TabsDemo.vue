<template>
<div class="tabs">
	<h1>Tabs 组件文档</h1>
	<h2>Tabs 标签页常规示例</h2>
	<Demo :component="TabsDemo1" :code="TabsDemo1Code" />
	<h2>标签页禁用 disable 示例</h2>
	<div class="text">可以通过在 Tabs 组件上指定参数确定默认标签和被禁用的标签。</div>
	<Demo :component="TabsDemo2" :code="TabsDemo2Code" />
</div>
<div class="more">更多组件开发中...敬请期待</div>
</template>
<script lang="ts">
import Demo from '../components/Demo.vue';
import TabsDemo1 from '../components/tabs/Tabs.demo1.vue';
import TabsDemo2 from '../components/tabs/Tabs.demo2.vue';
import TabsDemo1Code from '../components/tabs/Tabs.demo1';
import TabsDemo2Code from '../components/tabs/Tabs.demo2';

export default {
	components: { Demo },
	setup() {
		return {
			TabsDemo1, TabsDemo1Code,
			TabsDemo2, TabsDemo2Code,
		};
	},
}
</script>


<style lang="scss" scoped>
.tabs {
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
.more {
  padding: 8px 16px;
	font-weight: 700;
}
</style>