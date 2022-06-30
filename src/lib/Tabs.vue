<template>
<div class="concise-tabs">
	<div class="concise-tabs-nav" ref="container">
		<div class="concise-tabs-nav-item" v-for="t in titles" :key="t" :class="{selected: t===selected, disable: disable.indexOf(t)>=0}"
		:ref="el => {if(t === selected) selectedItem = el}" @click="select(t)">{{t}}</div>
		<div class="concise-tabs-nav-indicator" ref="indicator"></div>
	</div>
	<div class="concise-tabs-content">
		<component :is="current" :key="current.props.title" />
	</div>
</div>
</template>

<script lang="ts">
import Tab from '@/lib/Tab.vue';
import { ref, computed, onMounted, watchEffect } from 'vue';

export default {
	props: {
		selected: {
			type: String,
			require: true
		},
		disable: {
			type: Array,
			default: []
		}
	},
	setup(props, context) {
		const selectedItem = ref<HTMLDivElement>(null);
		const container = ref<HTMLDivElement>();
		const indicator = ref<HTMLDivElement>();

		const defaults = context.slots.default!();
		// console.log(defaults);
		defaults.map(tag => {
			if(tag.type !== Tab) {
				throw new Error('Tabs 的子标签必须是 Tab!');
			}
		});
		const current = computed(() => {
			return defaults.find(tag => tag.props.title === props.selected);
		});
		const titles = defaults.map(tag => tag.props.title);
		const select = (title: string) => {
			if(props.disable.indexOf(title) >= 0) return;
			context.emit('update:selected', title);
		}

		onMounted(() => {
			watchEffect(() => {
				const {width} = selectedItem.value.getBoundingClientRect();
				indicator.value.style.width = width + 'px';

				const {left: left1} = container.value.getBoundingClientRect();
				const {left: left2} = selectedItem.value.getBoundingClientRect();
				indicator.value.style.left = (left2 - left1) + 'px';
			})
		});

		return { defaults, current, titles, select, selectedItem, indicator, container };
	},
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.concise-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
			caret-color: transparent;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
			&.disable {
				color: #999;
				cursor: not-allowed;
			}
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 0.25s;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>