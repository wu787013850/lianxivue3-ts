import { createApp } from 'vue'
import App from './App.vue'
import Element from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'

const app = createApp(App)
app.use(Element)
app.use(router)
app.mount('#app')
