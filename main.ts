import App from './App.vue'
import { createApp } from 'vue'
import lib from 'x-vue3'
console.log(1)
const app=createApp(App)
app.use(lib)
app.mount('#app')