import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import mitt from 'mitt'
import Notifications from '@kyvg/vue3-notification'
import VueCountdown from '@chenfengyuan/vue-countdown'


// Events
const emitter = mitt()


// Create App
const app = createApp(App)


// Pinia
const pinia = createPinia()


// Vue use
app.use(pinia)
app.use(router)
app.use(Notifications)


// Vue provide
app.provide('emitter', emitter)


// VueCountdown
app.component(VueCountdown.name, VueCountdown)


// Mount
app.mount('#app')
