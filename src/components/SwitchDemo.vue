<template>
	<div class="switch">
		<h1>Switch 组件文档</h1>
		<h2>Switch 组件基本示例</h2>
		<div><Switch v-model:value="checked"/></div>
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';

export default {
	components: { Switch },
	setup() {
		const checked = ref(false);
		return { checked };
	}

}
</script>

<style lang="scss" scoped>
$border-color: #e0e0e0;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>