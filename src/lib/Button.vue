<template>
	<button class="concise-button" :class="classes" :disabled="disabled">
		<span v-if="loading" class="concise-loadingIndicator"></span>
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { ref, computed } from "vue";

export default {
	props: {
		theme: {
			type: String,
			default: 'button',
		},
		size: {
			type: String,
			default: 'normal',
		},
		level: {
			type: String,
			default: 'normal',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		const { theme, size, level } = props;
		const classes = computed(() => {
			return {
				[`concise-theme-${theme}`]: theme,
				[`concise-size-${size}`]: size,
				[`concise-level-${level}`]: level,
			}
		});
		return { classes };

	},
}
</script >

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;
$blue: #40a9ff;
$red: #f56c6c;
$green: #41b883;
$grey: #d9d9d9;
.concise-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.9);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.concise-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: #333;
    text-decoration: underline;
    &:hover,
    &:focus {
      color: lighten(#333, 30%);
    }
  }
  &.concise-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: #333;
    &:hover,
    &:focus {
      background: #f5f5f5;
      color: lighten(#333, 10%);
    }
  }
  &.concise-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.concise-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.concise-theme-button {
    &.concise-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: lighten($blue, 10%);
        border-color: lighten($blue, 10%);
      }
    }
    &.concise-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
    &.concise-level-success {
      background: $green;
      border-color: $green;
      color: white;
      &:hover,
      &:focus {
        background: lighten($green, 10%);
        border-color: lighten($green, 10%);
      }
    }
  }
  &.concise-theme-link {
    &.concise-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: lighten($blue, 10%);
      }
    }
    &.concise-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
    &.concise-level-success {
      color: $green;
      &:hover,
      &:focus {
        color: lighten($green, 10%);
      }
    }
  }
  &.concise-theme-text {
    &.concise-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.concise-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
    &.concise-level-success {
      color: $green;
      &:hover,
      &:focus {
        color: darken($green, 10%);
      }
    }
  }
  &.concise-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      background: #fff;
      &:hover {
        background: #fff;
        border-color: $grey;
      }
    }
  }
  &.concise-theme-link, &.concise-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        color: $grey;
      }
    }
  }
  > .concise-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: concise-spin 1s infinite linear;
  }
}
@keyframes concise-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>