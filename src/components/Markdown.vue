<template>
<article class="markdown-body">
	<Intro v-if="check('intro')" />
	<Started v-if="check('started')" />
	<Install v-if="check('install')" />
</article>
</template>

<script lang="ts">
// @ts-nocheck
import Intro from '../markdowns/intro.md';
import Started from '../markdowns/started.md';
import Install from '../markdowns/install.md';
import { useRoute } from 'vue-router';

export default {
	components: { Intro, Started, Install },
  setup(props) {
		const route = useRoute();
		const check = (name: string) => {
			return (name === route.name);
		}; 
		return { check }
  },
}
</script>

<style lang="scss" scoped>
article {
	text-align: left;
	padding-left: 10px;
}
</style>
