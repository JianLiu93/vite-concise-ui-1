<template>
	<div>
		<Button theme="button" size="normal" loading @click="onClick1">数据加载中</Button>
		<Button theme="link" size="normal" loading @click="onClick1">数据加载中</Button>
		<Button theme="text" size="normal" loading @click="onClick1">数据加载中</Button>
		<Button theme="button" size="normal" @click="onClick2">加载完毕</Button>
	</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
	components: { Button },
	setup() {
		const onClick1 = () => {
			console.log('loading');
		}
		const onClick2 = () => {
			console.log('complete');
		}
		return { onClick1, onClick2 }
	}
}
</script>
