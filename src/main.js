import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import '@fortawesome/fontawesome-free/css/all.min.css'

const app = createApp(App)
app.use(i18n)
app.mount('#app')
