<template>
	<button class="concise-switch" :class="{checked: value}" @click="toggle">
		<span></span>
	</button>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
	props: {
		value: Boolean
	},
	setup(props, context) {
		const toggle = () => {
			context.emit('update:value', !props.value);
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
	cursor: pointer;

	&:focus { outline: none; }

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
}
.concise-switch.checked {
	background: #41b883;
	>span {
	left: calc(100% - #{$h2} - 3px);
	}
}

</style>