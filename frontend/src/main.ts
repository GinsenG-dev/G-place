import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './pages'

import {App} from './app/ui'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
