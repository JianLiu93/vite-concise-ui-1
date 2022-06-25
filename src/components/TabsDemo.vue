<template>
	<div>Tabs组件示例</div>
	<h1>示例1</h1>
	<Tabs v-model:selected="def_title">
		<Tab title="标签1">内容1</Tab>
		<Tab title="我是一个非常长的标签">内容2</Tab>
	</Tabs>
</template>
<script lang="ts">
import { ref } from 'vue'
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue';

export default {
	components: { Tab, Tabs },
	setup() {
		const def_title = ref('我是一个非常长的标签');
		return { def_title };
	},
}
</script>


<style lang="scss" scoped>

</style>