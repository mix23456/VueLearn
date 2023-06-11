import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import './assets/logo'

createApp(App).use(bootstrap).mount('#app')
