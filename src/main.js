/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
// importa les funcions d'http i la store
import { http } from '@/httpConfiguration'
import { store } from '@/store'

// crea la app
const app = createApp(App)

// inclou funcions d'http globalment a l'app i a la store
app.http = http
store.http = http

registerPlugins(app)

app.mount('#app')
