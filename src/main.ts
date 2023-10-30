import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/es'
import 'quasar/dist/quasar.css' // Importa los estilos de Quasar aquí
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Quasar, {
    plugins: {}, // importa los plugins de Quasar y añádelos aquí
    lang: quasarLang,
  })

app.mount('#app')
