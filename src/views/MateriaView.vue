<template>
    <div>
      <h1>Materias de la Academia</h1>
  
      <!-- Botones para cambiar entre secciones -->
      <div>
        <button @click="showList = true">Consultar Lista de Materias</button>
        <button @click="showList = false">Agregar Materia Nueva</button>
      </div>
  
      <!-- Sección para consultar la lista de materias -->
      <div>
        <QueryMateria v-show="showList" />
      </div>
  
      <!-- Sección para agregar una nueva materia -->
      <div>
        <NewMateria v-show="!showList" />
      </div>
    </div>
  </template>
  
  <script>
  import NewMateria from '../components/NewMateria.vue'; // Asegúrate de que la ruta sea correcta
  import QueryMateria from '../components/QueryMateria.vue'; // Asegúrate de que la ruta sea correcta
  
  export default {
    components: {
      NewMateria,
      QueryMateria,
    },
    data() {
      return {
        showList: true,
      };
    },
    // Resto de tu lógica para MateriaView.vue
  };
  </script>
  
  <style>
  /* Estilos para MateriaView.vue */
  </style>
  