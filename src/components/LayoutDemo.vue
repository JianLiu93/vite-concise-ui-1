<template>
	<div class="layout">
		<h1>Layout 组件文档</h1>
		<h2>Layout 的基本示例</h2>
		<div class="text">通过基础的 24 分栏，迅速简便地创建布局。</div>
		<Demo :component="LayoutDemo1" :code="LayoutDemo1Code" />
		<h2>带间距 space 示例</h2>
		<div class="text">con-row组件提供 space 属性来指定每一栏之间的间距，默认为0。</div>
		<Demo :component="LayoutDemo2" :code="LayoutDemo2Code" />
		<h2>混合布局 layout 示例</h2>
		<div class="text">可通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</div>
		<Demo :component="LayoutDemo3" :code="LayoutDemo3Code" />
		<h2>分栏偏移 offset 示例</h2>
		<div class="text">支持偏移指定的 n/24 栏数，通过制定 con-col 组件的 offset 属性指定。</div>
		<Demo :component="LayoutDemo4" :code="LayoutDemo4Code" />
		<h2>支持 flex 灵活对齐</h2>
		<div class="text">通过 flex 布局的 justify-content 来对分栏进行灵活的对齐。</div>
		<Demo :component="LayoutDemo5" :code="LayoutDemo5Code" />
	</div>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue';
import LayoutDemo1 from '../components/layout/Layout.demo1.vue';
import LayoutDemo2 from '../components/layout/Layout.demo2.vue';
import LayoutDemo3 from '../components/layout/Layout.demo3.vue';
import LayoutDemo4 from '../components/layout/Layout.demo4.vue';
import LayoutDemo5 from '../components/layout/Layout.demo5.vue';
import LayoutDemo1Code from '../components/layout/Layout.demo1';
import LayoutDemo2Code from '../components/layout/Layout.demo2';
import LayoutDemo3Code from '../components/layout/Layout.demo3';
import LayoutDemo4Code from '../components/layout/Layout.demo4';
import LayoutDemo5Code from '../components/layout/Layout.demo5';

export default {
	components: { Demo },
	setup() {
		return {
			LayoutDemo1, LayoutDemo1Code,
			LayoutDemo2, LayoutDemo2Code,
			LayoutDemo3, LayoutDemo3Code,
			LayoutDemo4, LayoutDemo4Code,
			LayoutDemo5, LayoutDemo5Code,
		}
	}
}
</script>

<style lang="scss" scoped>
.layout {
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
	::v-deep .con-row {
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
			background: #8dcafc;
		}
		&.right {
			justify-content: flex-end;
		}
		&.between {
			justify-content: space-between;
		}
	}
}
</style>