import { createApp, h } from 'vue';
import Dialog from '../lib/Dialog.vue';

export const openDialog = (options: any) => {
	const {title, content, OK, cancel} = options;
	const div = document.createElement('div');
	document.body.appendChild(div);
	const app = createApp({
		render() {
			return h(
				Dialog,
				{
				visible: true,
				'onUpdate:visible': (val: boolean) => {
					if(val === false) {
						close();
					}
				},
				OK,
				cancel
				},
				{title, content},
			);
		}
	});
	app.mount(div);

	const close = () => {
		app.unmount();
		div.remove();
	}
}