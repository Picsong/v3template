import { createApp } from 'vue'
import Antd, { message } from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import 'tailwindcss/tailwind.css'

const app = createApp(App)
app.use(Antd)
app.config.globalProperties.$message = message
app.mount('#app')
