<template>
<div>
  <transition name="drop">
    <div class="concise-message" :style="style[type]" :class="{center: center}" v-if='visible'>
      <Icon :name="style[type].icon" size="20px" :color="style[type].color" />
      <span class="text">{{text}}</span>
      <Icon v-if="closeable" class="close" @click="visible=false" name="close" size="20px" color="#888" />
    </div>
  </transition>
</div>
</template>
<script lang="ts">
import { onMounted, ref } from 'vue'
import Icon from '../lib/Icon.vue';
 
export default {
  components: { Icon },
  props: {
    text: {
      type: String,
      default: '信息'
    },
    type: {
      type: String,
      default: 'warn'
    },
    closeable: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    // remain time
    remain: {
      type: Number,
      default: 3
    }
  },
  setup (props, context) {
    const style = {
			info: {
        icon: 'info',
        color: '#909399',
        backgroundColor: '#edf2fc',
        borderColor: '#d9d9d9'
      },
      warn: {
        icon: 'warning',
        color: '#E6A23C',
        backgroundColor: '#faecd8',
        borderColor: '#fdce8b'
      },
      error: {
        icon: 'error',
        color: '#F56C6C',
        backgroundColor: '#ffe0e0',
        borderColor: '#ffb0b0'
      },
      success: {
        icon: 'correct',
        color: '#67C23A',
        backgroundColor: '#e1f3d8',
        borderColor: '#aff78b'
      }
    };
    // 控制动画
    const visible = ref(false);
    // 组件模板渲染成功后触发
    onMounted(() => {
      visible.value = true;
      let time = props.remain * 1000;
      if(time === 0) return;
      if(time <= 0) {time = 3000;}
			let timer = setTimeout(() => {
				visible.value = false;
				clearTimeout(timer);
			}, time);
    });
    return { style, visible }
  }
}
</script>

<style lang="scss">
.drop {
  &-enter {
    &-from {
      transform: translateY(-74px);
      opacity: 0;
    }
    &-to {
      transform: none;
      opacity: 1;
    }
		&-active {
      transition: all 0.3s;
    }
  }
	&-leave {
    &-from {
      transform: none;
      opacity: 1;
    }
    &-to {
      transform: translateY(-74px);
      opacity: 0;
    }
		&-active {
      transition: all 0.3s;
    }
  }
}
.concise-message-container {
  position: fixed;
  z-index: 99;
  left: 50%;
  top: 0;
  margin-left: -180px;
}
.concise-message {
  // width: 360px;
  // max-height: 50px;
  // position: fixed;
  // z-index: 99;
  // left: 50%;
  // top: 24px;
  // margin-left: -180px;
  // padding: 0 20px;
  // border: 1px solid #d9d9d9;
  // background: #edf2fc;
  // color: #909399;
  // border-radius: 4px;
	// font-weight: 700;
	// text-align: left;
  width: 360px;
  max-height: 50px;
  margin: 24px auto 0;
  padding: 0 20px;
  border: 1px solid #d9d9d9;
  background: #edf2fc;
  color: #909399;
  border-radius: 4px;
	font-weight: 700;
	text-align: left;
  &.center {
    text-align: center;
  }
  svg {
    margin-right: 6px;
    vertical-align: middle;
  }
  .text {
		display: inline-block;
		margin: 10px auto;
    vertical-align: middle;
  }
  .close {
    float: right;
    margin: 10px 0;
    cursor: pointer;
  }
}
</style>