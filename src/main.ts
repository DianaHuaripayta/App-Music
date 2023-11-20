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
    config: {
      brand: {
        primary: '#1976d2',
        secondary: '#26A69A',
        accent: '#9C27B0',
  
        dark: '#1d1d1d',
        'dark-page': '#121212',
  
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    }
  })

app.mount('#app')
