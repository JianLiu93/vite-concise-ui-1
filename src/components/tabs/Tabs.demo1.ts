const code: string = `
<template>
<div>
	<Tabs v-model:selected="def_title">
		<Tab title="公园">风景大好</Tab>
		<Tab title="人数">人潮涌动</Tab>
		<Tab title="我是一个非常长的标签">我是一个非常长的内容</Tab>
	</Tabs>
</div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Tab from '../../lib/Tab.vue';
import Tabs from '../../lib/Tabs.vue';

export default {
	components: { Tab, Tabs },
	setup() {
		const def_title = ref('公园');
		return { def_title };
	},
}
</script>
`
export default code;

