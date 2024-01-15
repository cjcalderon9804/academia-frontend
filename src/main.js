import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';  // Importa de esta manera

import ProfesorView from './views/ProfesorView.vue';
import MateriaView from './views/MateriaView.vue';
import AulaView from './views/AulaView.vue';
import NewProfesor from './components/NewProfesor.vue';
import NewMateria from './components/NewMateria.vue';
import NewAula from './components/NewAula.vue';
import QueryProfesor from './components/QueryProfesor.vue';
import QueryMateria from './components/QueryMateria.vue';
import QueryAula from './components/QueryAula.vue';


const routes = [
  { path: '/profesor', component: ProfesorView },
  { path: '/materia', component: MateriaView },
  { path: '/aula', component: AulaView },
  { path: '/newprofesor', component: NewProfesor },
  { path: '/newmateria', component: NewMateria },
  { path: '/newaula', component: NewAula },
  { path: '/queryprofesor', component: QueryProfesor },
  { path: '/querymateria', component: QueryMateria },
  { path: '/queryaula', component: QueryAula },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
