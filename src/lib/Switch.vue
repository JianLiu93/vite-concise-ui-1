<template>
	<button class="concise-switch" :class="{checked: value, [`concise-size-${size}`]: true, disable: disable}" @click="toggle">
		<span></span>
	</button>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
	props: {
		value: {
			type: Boolean,
			default: false
		},
		disable: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'normal'
		}
	},
	setup(props, context) {
		const toggle = () => {
			if(!props.disable) {
			context.emit('update:value', !props.value);
			}
		}
		return { toggle };
	},
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.concise-switch {
	height: $h;
	width: $h*2;
	border: none;
	background: grey;
	position: relative;
	border-radius: $h/2;
	margin: 10px 20px 10px 0;
	cursor: pointer;

	&:focus { outline: none; }
	&.disable {
		cursor: not-allowed;
		background: #ccc;
	}

	span {
		position: absolute;
		top: 2px;
		left: 3px;
		height: $h2;
		width: $h2;
		background: #fff;
		border-radius: $h2/2;
		transition: all .25s;
	}
	&.checked {
		background: #41b883;
		>span {
		left: calc(100% - #{$h2} - 3px);
		}
	}
	&.concise-size-big {
		$h: 44px;
		$h2: $h - 8px;
		height: $h;
		width: $h*2;
		border-radius: $h/2;

		>span {
			top: 4px;
			left: 6px;
			height: $h2;
			width: $h2;
			border-radius: $h2/2;
		}
		&.checked>span {
			left: calc(100% - #{$h2} - 6px);
		}
	}
	&.concise-size-small {
		$h: 14px;
		$h2: $h - 2px;
		height: $h;
		width: $h*2;
		border-radius: $h/2;

		>span {
			top: 1px;
			left: 1px;
			height: $h2;
			width: $h2;
			border-radius: $h2/2;
		}
		&.checked>span {
			left: calc(100% - #{$h2} - 1px);
		}
	}
}


</style>