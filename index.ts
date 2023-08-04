import App from './App.vue'
import { createApp } from 'vue'
import lib from './es'
console.log(1)
const app=createApp(App)
app.use(lib)
app.mount('#app')