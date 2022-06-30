import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/SwitchDemo.vue';
import ButtonDemo from '../components/ButtonDemo.vue';
import DialogDemo from '../components/DialogDemo.vue';
import TabsDemo from '../components/TabsDemo.vue';
import InputDemo from '../components/InputDemo.vue';
import LayoutDemo from '../components/LayoutDemo.vue';
import MsgDemo from '../components/MsgDemo.vue';
import Markdown from '../components/Markdown.vue';

// const Markdown = () => import('../components/Markdown.vue');

import { h } from 'vue';
const history = createWebHashHistory();
// const md = filename => h(Markdown, { path: `../markdowns/${filename}.md`, key: filename });

export const router = createRouter({
	history,
	routes: [
		{path: '/', component: Home},
		{
		  path: '/doc', component: Doc,
		  children: [
			{path: '', redirect: '/doc/intro' },
			{path: 'intro', component: Markdown, name: 'intro'},
			{path: 'started', component: Markdown, name: 'started'},
			{path: 'install', component: Markdown,  name: 'install'},
			{path: 'switch', component: SwitchDemo},
			{path: 'layout', component: LayoutDemo},
			{path: 'button', component: ButtonDemo},
			{path: 'dialog', component: DialogDemo},
			{path: 'message', component: MsgDemo},
			{path: 'tabs', component: TabsDemo},
			{path: 'input', component: InputDemo},
			]
		},
	],
});
router.afterEach(() => {
	// console.log('路由切换...');
	setTimeout(() => {
		window.scrollTo(0, 0);
	}, 0);
})