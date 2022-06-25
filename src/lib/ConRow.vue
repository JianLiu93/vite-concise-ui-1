<template>
  <div class="con-row" ref="row">
		<div class="con-row-col" v-for="(col, index) in defaults" :key="index" :ref="el => {colList[index] = el}">
			<component :is="col" :space="colSpace" />
		</div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, reactive } from 'vue';
import ConCol from '@/lib/ConCol.vue';

export default {
  props: {
    space: {
      type: Number,
      default: 0,
    }
  },
  setup(props, context) {
    const row = ref<HTMLDivElement>();
    const colList = reactive<HTMLDivElement[]>([]);
    const { space } = props;

		const defaults = context.slots.default!();
		let count = 0;
		defaults.map(col => {
			if(col.type !== ConCol) {
				throw new Error('子标签必须是 con-col!');
			} else {count++;}
		});
		const colSpace = ref(0);
		colSpace.value = (space >0 && count > 1)? space * (count - 1): 0;
		console.log(space, colSpace.value);

		onMounted(() => {
				const style = row.value.style;
				style.marginLeft = (- space /2) + 'px';
				style.marginRight = (- space /2) + 'px';
			if(count > 0) {
			for(let i=0; i<colList.length; i++) {
				const colStyle = colList[i].style;
				colStyle.paddingLeft = space /2 + 'px';
				colStyle.paddingRight = space /2 + 'px';
			}
			}
    });
    return { row, colList, defaults, colSpace }
	}
}
</script>

<style lang="scss">
.con-row {
	display: flex;
	flex-flow: nowrap;
	justify-content: flex-start;
  width: 100%;
  min-height: 20px;
	>.con-row-col {
		display: flex;
		flex-flow: nowrap;
	}
}
</style>