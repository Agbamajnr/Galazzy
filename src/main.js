import { createApp } from 'vue'
import './assets/css/style.css'
import './assets/css/tailwind.css'
import App from './App.vue'
import router from './router/index.js'


createApp(App).use(router).mount('#app')

