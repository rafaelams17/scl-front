import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { notify } from '@kyvg/vue3-notification'

createApp(App).use(router, notify).mount('#app')
