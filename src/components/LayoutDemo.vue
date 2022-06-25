<template>
	<div class="layout">
		<h3>Layout 的基本示例</h3>
		<div>通过基础的 24 分栏，迅速简便地创建布局。</div>
		<con-row class="row">
			<con-col><div class="content bg-dark"></div></con-col>
		</con-row>
		<con-row class="row">
			<con-col :span="8"><div class="content bg-dark"></div></con-col>
			<con-col :span="8"><div class="content bg-light"></div></con-col>
			<con-col :span="8"><div class="content bg-dark"></div></con-col>
		</con-row>
		<con-row class="row">
			<con-col :span="6"><div class="content bg-dark"></div></con-col>
			<con-col :span="6"><div class="content bg-light"></div></con-col>
			<con-col :span="6"><div class="content bg-dark"></div></con-col>
			<con-col :span="6"><div class="content bg-light"></div></con-col>
		</con-row>
		<con-row class="row">
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="4"><div class="content bg-light"></div></con-col>
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="4"><div class="content bg-light"></div></con-col>
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="4"><div class="content bg-light"></div></con-col>
		</con-row>
		<h3>带间距 space 示例</h3>
		<div>con-row组件提供 space 属性来指定每一栏之间的间距，默认为0。</div>
		<con-row class="row" :space="40">
			<con-col :span="12"><div class="content bg-dark"></div></con-col>
			<con-col :span="12"><div class="content bg-light"></div></con-col>
		</con-row>
		<con-row class="row" :space="20">
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="4"><div class="content bg-light"></div></con-col>
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="4"><div class="content bg-light"></div></con-col>
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="4"><div class="content bg-light"></div></con-col>
		</con-row>
		<h3>混合布局 layout 示例</h3>
		<div>可通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</div>
		<con-row class="row" :space="4">
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="16"><div class="content bg-light"></div></con-col>
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
		</con-row>
		<con-row class="row" :space="4">
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="8"><div class="content bg-light"></div></con-col>
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="8"><div class="content bg-light"></div></con-col>
		</con-row>
		<con-row class="row" :space="4">
			<con-col :span="8"><div class="content bg-dark"></div></con-col>
			<con-col :span="8"><div class="content bg-light"></div></con-col>
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="4"><div class="content bg-light"></div></con-col>
		</con-row>
		<h3>分栏偏移 offset 示例</h3>
		<div>支持偏移指定的 n/24 栏数，通过制定 con-col 组件的 offset 属性指定。</div>
		<con-row class="row">
			<con-col :span="6"><div class="content bg-dark"></div></con-col>
			<con-col :span="6" :offset="6"><div class="content bg-light"></div></con-col>
		</con-row>
		<con-row class="row">
			<con-col :span="8" :offset="8"><div class="content bg-dark"></div></con-col>
		</con-row>
		<con-row class="row">
			<con-col :span="8" :offset="6"><div class="content bg-dark"></div></con-col>
			<con-col :span="6" :offset="4"><div class="content bg-light"></div></con-col>
		</con-row>
		<h3>支持 flex 灵活对齐</h3>
		<div>通过 flex 布局的 justify-content 来对分栏进行灵活的对齐。</div>
		<con-row class="row">
			<con-col :span="6"><div class="content bg-dark"></div></con-col>
			<con-col :span="6"><div class="content bg-light"></div></con-col>
			<con-col :span="6"><div class="content bg-dark"></div></con-col>
		</con-row>
		<con-row class="row right">
			<con-col :span="6"><div class="content bg-dark"></div></con-col>
			<con-col :span="6"><div class="content bg-light"></div></con-col>
			<con-col :span="6"><div class="content bg-dark"></div></con-col>
		</con-row>
		<con-row class="row between">
			<con-col :span="6"><div class="content bg-dark"></div></con-col>
			<con-col :span="6"><div class="content bg-light"></div></con-col>
			<con-col :span="6"><div class="content bg-dark"></div></con-col>
		</con-row>
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';
import ConCol from '../lib/ConCol.vue';
import ConRow from '../lib/ConRow.vue';

export default {
	components: { Switch, ConCol, ConRow },
	setup() {
		const checked = ref(false);
		return { checked };
	}

}
</script>

<style lang="scss" scoped>
h3 {
	margin-bottom: 20px;
}
.row {
	display: flex;
	height: 40px;
	margin-bottom: 20px;
	.con-col {
		border-radius: 4px;
		overflow: hidden;
	}
	.content {
		height: 40px;
	}
	.bg-dark {
		background: #40a9ff;
	}
	.bg-light {
		background: #73c0ff;
	}
	&.right {
		justify-content: flex-end;
	}
	&.between {
		justify-content: space-between;
	}
}
</style>