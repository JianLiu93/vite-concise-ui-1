import { createApp, createVNode, render, h } from 'vue';
import Message from '../lib/Message.vue';
import Icon from '../lib/Icon.vue';

export const openMessage = (options: any) => {
	const {type, text , remain, center, closeable} = options;

	const container = document.querySelector('.concise-message-container');
	const div = document.createElement('div');
	container.appendChild(div);

	const app = createApp({
		render() {
			return h(
				Message,
				{
					type,
					text,
					remain,
					center,
					closeable,
					visible: true,
					'onUpdate:visible': (val: boolean) => {
						if(val === false) {
							close();
						}
					},
				},
			);
		}
	});
	app.mount(div);

	const close = () => {
		app.unmount();
		div.remove();
	}
}