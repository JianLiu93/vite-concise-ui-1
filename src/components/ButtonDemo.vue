<template>
	<div class="swtich">
		<div class="btn-list"><div class="title">基础的按钮示例</div>
		<Button theme="button" size="big" @click="onClick">大按钮</Button>
		<Button theme="button" size="normal" @click="onClick">标准按钮</Button>
		<Button theme="button" size="small" @click="onClick">小按钮</Button>
		</div>

		<div class="btn-list"><div class="title">不同信息按钮示例</div>
		<Button level="normal" size="normal" @click="onClick">基础按钮</Button>
		<Button level="main" size="normal" @click="onClick">主要按钮</Button>
		<Button level="danger" size="normal" @click="onClick">危险按钮</Button>
		<!-- 成功按钮、信息按钮 -->
		</div>

		<div class="btn-list"><div class="title">链接形式按钮示例</div>
		<Button theme="link" size="big" @click="onClick">大链接按钮</Button>
		<Button theme="link" size="normal" @click="onClick">标准链接按钮</Button>
		<Button theme="link" size="small" @click="onClick">小链接按钮</Button>
		</div>

		<div class="btn-list"><div class="title">文字型按钮示例</div>
		<Button theme="text" size="big" @click="onClick">大文字按钮</Button>
		<Button theme="text" size="normal" @click="onClick">标准文字按钮</Button>
		<Button theme="text" size="small" @click="onClick">小文字按钮</Button>
		</div>

		<div class="btn-list"><div class="title">链接信息按钮示例</div>
		<Button theme="link" level="normal" size="normal" @click="onClick">基础按钮</Button>
		<Button theme="link" level="main" size="normal" @click="onClick">主要按钮</Button>
		<Button theme="link" level="danger" size="normal" @click="onClick">危险按钮</Button>
		<!-- 成功按钮、信息按钮 -->
		</div>

		<div class="btn-list"><div class="title">文字型信息按钮示例</div>
		<Button theme="text" level="normal" size="normal" @click="onClick">基础按钮</Button>
		<Button theme="text" level="main" size="normal" @click="onClick">主要按钮</Button>
		<Button theme="text" level="danger" size="normal" @click="onClick">危险按钮</Button>
		<!-- 成功按钮、信息按钮 -->
		</div>

		<div class="btn-list"><div class="title">禁用按钮示例</div>
		<Button theme="button" size="normal" disabled @click="onClick">基础按钮</Button>
		<Button theme="link" size="normal" disabled @click="onClick">主要按钮</Button>
		<Button theme="text" size="normal" disabled @click="onClick">危险按钮</Button>
		</div>

		<div class="btn-list"><div class="title">数据加载中按钮示例</div>
		<Button theme="button" size="normal" loading @click="onClick">数据加载中</Button>
		<Button theme="button" size="normal" @click="onClick">加载完毕</Button>
		</div>
	</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
	components: { Button },
	setup() {
		const onCLick = () => {
			console.log('click');
		}
		const onFocus = () => {
			console.log('focus');
		}
		const onMove = () => {
			console.log('move');
		}
		return {onCLick, onFocus, onMove}
	}
}
</script >

<style lang="scss" scoped>

</style>