const code: string = `
<template>
<div>
	<Tabs v-model:selected="def_title" :disable="disable_list">
		<Tab title="标签1">内容1</Tab>
		<Tab title="标签2">内容2</Tab>
		<Tab title="禁止的标签">禁止的内容</Tab>
	</Tabs>
</div>
</template>
<script lang="ts">
import { reactive, ref } from 'vue'
import { Tab, Tabs } from 'concise-ui-vue3';

export default {
	components: { Tab, Tabs },
	setup() {
		const def_title = ref('标签2');
		const disable_list = reactive(['禁止的标签']);
		return { def_title, disable_list }
	},
}
</script>
`
export default code;

