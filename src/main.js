// main.js
import { createApp } from 'vue'
import App from './App.vue'
import store from './store' 
import router from './router/index';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import VueSplide from '@splidejs/vue-splide';

import './style.css'
import './basic.css'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(router).use(vuetify).use(store).use(VueSplide).mount('#app') 
