import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Vuelos from '../components/Vuelos.vue';

const routes = [
  { path: '/', component: Vuelos },
  { path: '/home', component: Home },
  { path: '/vuelos', component: Vuelos },

  // { path: '/:pathMatch(.*)*', component: NotFound }, // Opcional para manejar rutas no encontradas
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
