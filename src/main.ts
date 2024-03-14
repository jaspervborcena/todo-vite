import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.ts'
import {createPinia} from 'pinia'
import { createI18n } from 'vue-i18n'
import './index.css'

const i18n = createI18n({
  // something vue-i18n options here ...
})

const app = createApp(App)
const pinia = createPinia()
// app.use(axios)
app.use(pinia)
app.use(router)
app.use(i18n)
//app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')

