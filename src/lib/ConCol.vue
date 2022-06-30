<template>
  <div class="con-col" ref="col">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

export default {
  name: 'ConCol',
  // 接收父组件传递的参数
  props: {
    space: {
      type: Number,
      default: 0,
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props, context) {
    const col = ref<HTMLDivElement>(null);
    const {span, space, offset} = props;

    onMounted(() => {
      const parent = col.value.parentNode as HTMLDivElement;
      const grandpa = col.value.parentNode.parentNode as HTMLDivElement;
      const grandWidth = grandpa.offsetWidth - space;
      col.value.style.width = grandWidth * span / 24 + "px";
      parent.style.marginLeft = grandWidth * offset / 24 +'px';
    });
    return { col }
	}
}
</script>

<style lang="scss">
.con-col {
  width: 100%;
  min-height: 20px;
}
</style>