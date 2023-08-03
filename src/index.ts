export * from './components'
import App from './App.vue'
import { createApp } from 'vue'
console.log(1)
const app=createApp(App)
app.mount('#app')