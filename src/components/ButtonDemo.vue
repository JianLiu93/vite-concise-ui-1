<template>
	<div class="button">
		<h1>Button 组件文档</h1>
		<div class="btn-list"><h2>基础按钮示例</h2>
		<div class="text">支持 3 种 size 设置。</div>
		<Demo :component="ButtonDemo1" :code="ButtonDemo1Code" />
		</div>

		<div class="btn-list"><h2>包含不同信息的基础按钮示例</h2>
		<div class="text">支持 4 种 信息提示等级 ( level )：normal，main，success 和 danger。</div>
		<Demo :component="ButtonDemo3" :code="ButtonDemo3Code" />
		</div>

		<div class="btn-list"><h2>链接按钮示例</h2>
		<Demo :component="ButtonDemo2" :code="ButtonDemo2Code" />
		</div>

		<div class="btn-list"><h2>文字按钮示例</h2>
		<Demo :component="ButtonDemo4" :code="ButtonDemo4Code" />
		</div>

		<div class="btn-list"><h2>链接信息等级按钮示例</h2>
		<Demo :component="ButtonDemo5" :code="ButtonDemo5Code" />
		</div>

		<div class="btn-list"><h2>文字型信息等级按钮示例</h2>
		<Demo :component="ButtonDemo6" :code="ButtonDemo6Code" />
		</div>

		<div class="btn-list"><h2>disable 禁用按钮示例</h2>
		<Demo :component="ButtonDemo7" :code="ButtonDemo7Code" />
		</div>

		<div class="btn-list"><h2>数据加载中按钮示例</h2>
		<div class="text">设置 loading 属性为 true。</div>
		<Demo :component="ButtonDemo8" :code="ButtonDemo8Code" />
		</div>
	</div>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue';
import ButtonDemo1 from '../components/button/Button.demo1.vue';
import ButtonDemo2 from '../components/button/Button.demo2.vue';
import ButtonDemo3 from '../components/button/Button.demo3.vue';
import ButtonDemo4 from '../components/button/Button.demo4.vue';
import ButtonDemo5 from '../components/button/Button.demo5.vue';
import ButtonDemo6 from '../components/button/Button.demo6.vue';
import ButtonDemo7 from '../components/button/Button.demo7.vue';
import ButtonDemo8 from '../components/button/Button.demo8.vue';
import ButtonDemo1Code from '../components/button/Button.demo1';
import ButtonDemo2Code from '../components/button/Button.demo2';
import ButtonDemo3Code from '../components/button/Button.demo3';
import ButtonDemo4Code from '../components/button/Button.demo4';
import ButtonDemo5Code from '../components/button/Button.demo5';
import ButtonDemo6Code from '../components/button/Button.demo6';
import ButtonDemo7Code from '../components/button/Button.demo7';
import ButtonDemo8Code from '../components/button/Button.demo8';

export default {
	components: { Demo },
	setup() {
		return {
			ButtonDemo1, ButtonDemo1Code,
			ButtonDemo2, ButtonDemo2Code,
			ButtonDemo3, ButtonDemo3Code,
			ButtonDemo4, ButtonDemo4Code,
			ButtonDemo5, ButtonDemo5Code,
			ButtonDemo6, ButtonDemo6Code,
			ButtonDemo7, ButtonDemo7Code,
			ButtonDemo8, ButtonDemo8Code,
		}
	}
}
</script>

<style lang="scss" scoped>
.button {
  >h1 {
    padding: 8px 16px;
		border-bottom: 1px solid #d8dee4;
		margin-bottom: 16px;
  }
  h2 {
    padding: 8px 16px;
  }
	.text {
    padding: 8px 20px;
		color: #333;
	}
}
</style>