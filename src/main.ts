import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//1、route
import router from '@/router/index'

//2、pinia
import pinia from '@/store'

const app = createApp(App)

//1、route
app.use(router)
//2、pinia
app.use(pinia)
app.mount('#app')
