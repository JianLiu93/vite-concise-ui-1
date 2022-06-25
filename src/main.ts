import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { router } from './router'
import 'virtual:svg-icons-register'
import Icon from './lib/Icon.vue'

const app = createApp(App)
app.use(router)
app.component('Icon', Icon)
app.mount('#app')
