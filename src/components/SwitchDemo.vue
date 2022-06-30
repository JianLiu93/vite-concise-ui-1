<template>
	<div class="switch">
		<h1>Switch 组件文档</h1>
		<h2>Switch 组件基本示例</h2>
		<Demo :component="SwitchDemo1" :code="SwitchDemo1Code" />
		<h2>Switch 不同尺寸组件</h2>
		<Demo :component="SwitchDemo2" :code="SwitchDemo2Code" />
		<h2>disable 不可使用状态</h2>
		<Demo :component="SwitchDemo3" :code="SwitchDemo3Code" />
	</div>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue';
import SwitchDemo1 from '../components/switch/Switch.demo1.vue';
import SwitchDemo2 from '../components/switch/Switch.demo2.vue';
import SwitchDemo3 from '../components/switch/Switch.demo3.vue';
import SwitchDemo1Code from '../components/switch/Switch.demo1';
import SwitchDemo2Code from '../components/switch/Switch.demo2';
import SwitchDemo3Code from '../components/switch/Switch.demo3';

export default {
	components: { Demo },
	setup() {
		return {
			SwitchDemo1, SwitchDemo1Code,
			SwitchDemo2, SwitchDemo2Code,
			SwitchDemo3, SwitchDemo3Code,
		}
	}

}                                                                            
</script>

<style lang="scss" scoped>
.switch {
  >h1 {
    padding: 8px 16px;
		border-bottom: 1px solid #d8dee4;
		margin-bottom: 16px;
  }
  >h2 {
    padding: 8px 16px;
  }
}
</style>