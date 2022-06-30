<template>
<div>
	<slot />
</div>
</template>

<script lang="ts">
// import { onMounted } from 'vue'
export default {
	name: 'tag',
// 	props: {
// 		disable: {
// 			type: Boolean,
// 			default: false
// 		}
// 	},
// 	setup(props, context) {
// 		onMounted(() => {
// 			if(props.disable) {
// 				context.emit('update:disable', context.attrs.title);
// 			}
// 		});
// 	}
}
</script>

<style lang="scss">

</style>