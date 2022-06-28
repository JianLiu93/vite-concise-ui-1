import './lib/preset.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'virtual:svg-icons-register'
import Icon from './lib/Icon.vue'
import 'github-markdown-css'

const app = createApp(App)
app.use(router)
app.component('Icon', Icon)
app.mount('#app')

const container = document.createElement('div');
container.setAttribute('class', 'concise-message-container');
document.body.appendChild(container);