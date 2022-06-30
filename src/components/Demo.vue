<template>
	<div class="demo">
		<div class="demo-component">
			<component :is="component" />
		</div>
		<div class="demo-action">
			<Button @click="toggle">查看代码</Button>
		</div>
		<transition name="demo-code">
		<div v-if="codeIsShow" class="demo-code">
			<pre class="language-html" v-html="html"></pre>
		</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css';
import Button from '../lib/Button.vue';

const Prism = (window as any).Prism;

export default {
	components: { Button },
	props: {
    component: {
			type: Object,
			require: true
		},
		code: {
			type: String,
			default: ''
		}
  },

	setup(props) {
		const html = computed(() => {
      return Prism.highlight(props.code, Prism.languages.html, 'html');
		});
		const codeIsShow = ref(false);
		const toggle = () => codeIsShow.value = !codeIsShow.value;
		return { html, codeIsShow, toggle	}
	}

}
</script>

<style lang="scss" scoped>
$border-color: #e0e0e0;
.demo {
  border: 1px solid $border-color;
  margin: 16px 20px 32px 20px;

  &-component {
    padding: 16px;
  }

  &-action {
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
	.demo-code {
		&-enter {
			&-from {
				max-height: 0;
				opacity: 0;
			}
			&-to {
				max-height: 500px;
				opacity: 1;
			}
			&-active {
				transition: all 0.3s;
			}
		}
		&-leave {
			&-from {
				max-height: 500px;
				opacity: 1;
			}
			&-to {
				max-height: 0;
				opacity: 0;
			}
			&-active {
				transition: all 0.3s;
			}
		}
	}
}
</style>