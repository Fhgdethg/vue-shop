import { createApp } from 'vue'

import App from './App.vue'

import store from '@/store/store.ts'

import router from './router/router.ts'

import './styles/reset.scss'
import './styles/basic.scss'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
