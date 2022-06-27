import { createWebHashHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/SwitchDemo.vue';
import ButtonDemo from "../components/ButtonDemo.vue";
import DialogDemo from "../components/DialogDemo.vue";
import TabsDemo from "../components/TabsDemo.vue";
import DocDemo from "../components/DocDemo.vue";
import InputDemo from "../components/InputDemo.vue";
import LayoutDemo from "../components/LayoutDemo.vue";
import MsgDemo from "../components/MsgDemo.vue";

const history = createWebHashHistory();
export const router = createRouter({
	history,
	routes: [
		{path: '/', component: Home},
		{
		  path: '/doc', component: Doc,
		  children: [
			{path: '', component: DocDemo},
			{path: 'switch', component: SwitchDemo},
			{path: 'button', component: ButtonDemo},
			{path: 'dialog', component: DialogDemo},
			{path: 'message', component: MsgDemo},
			{path: 'tabs', component: TabsDemo},
			{path: 'input', component: InputDemo},
			{path: 'layout', component: LayoutDemo},
			]
		},
	],
});
router.afterEach(() => {
	console.log('路由切换...');
})