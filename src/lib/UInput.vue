<template>
	<label class="concise-label" v-if="type==='normal'" :style="width">
		<span class="name">{{fieldName}}</span>
		<input type="text"
		v-model="text" :class="{disabled: disabled}"
		:placeholder="placeholder" :disabled="disabled"
		@blur="submit">
	</label>
	<label class="concise-label" v-if="type==='button'" :style="width">
		<span class="name">{{fieldName}}</span>
		<input type="text"
		v-model="text" :class="{disabled: disabled}"
		:placeholder="placeholder" :disabled="disabled">
		<Button level="main" @click="submit">确定</Button>
	</label>
	<label class="concise-label" v-if="type==='password'" :style="width">
		<span class="name">{{fieldName}}</span>
		<input :type="showPW ? 'text':'password'"
		v-model="text" :class="{disabled: disabled}"
		:placeholder="placeholder" :disabled="disabled"
		@blur="submit">
		<span v-if="showPW===false" class="eye" @click="togglePW">
			<Icon name="eye" size="20px" />
		</span>
		<span v-if="showPW===true" class="eye" @click="togglePW">
			<Icon name="no_eye" size="20px" />
		</span>
	</label>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue';

export default {
	components: { Button },
	props: {
		value: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'normal'
		},
		fieldName: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		width: {
			type: String,
			default: ''
		}
	},
	setup(props, context) {
		const text = ref('');
		const showPW = ref(false);
		const width = 'width:' + props.width;
		const submit = () => {
			context.emit('update:value', text.value);
		}
		const togglePW = () => {
			showPW.value = !showPW.value;
		}
		return { text, showPW, submit, togglePW, width }
	}
}
</script>

<style lang="scss" scoped>
  .concise-label {
		position: relative;
		width: 80%;
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    background: #fff;
    .name {
      padding-right: 16px;
    }
    >input {
			min-width: 80px;
      height: 40px;
      flex: 1;
      border: 1px solid #ccc;
	  border-radius: 4px;
      margin-right: 16px;
	  margin-top: 10px;
	  margin-bottom: 10px;
	  padding: 0 10px;
	  &:focus {
		outline: none;
      	border: 1px solid #0d92ff;
      	box-shadow: 0 0 2px 1px rgba(64, 169, 255, 0.2);
	  }
	  &.disabled {
      cursor: not-allowed;
			caret-color: transparent;
			background: #f5f7fa;
	  }
	  &::-ms-reveal { display: none; }
    }
	.eye {
		position: absolute;
		right: 22px;
		cursor: pointer;
	}
  }
</style>