import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';  // Importa de esta manera

import ProfesorView from './views/ProfesorView.vue';
import MateriaView from './views/MateriaView.vue';
import AulaView from './views/AulaView.vue';

const routes = [
  { path: '/profesor', component: ProfesorView },
  { path: '/materia', component: MateriaView },
  { path: '/aula', component: AulaView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
