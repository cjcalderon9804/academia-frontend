<template>
    <div>
      <h1>Aulas de la Academia</h1>
  
      <!-- Botones para cambiar entre secciones -->
      <div>
        <button @click="showList = true">Consultar Lista de Aulas</button>
        <button @click="showList = false">Agregar Aula Nueva</button>
      </div>
  
      <!-- Sección para consultar la lista de aulas -->
      <div>
        <QueryAula v-show="showList" />
      </div>
  
      <!-- Sección para agregar una nueva aula -->
      <div>
        <NewAula v-show="!showList" />
      </div>
    </div>
  </template>
  
  <script>
  import NewAula from '../components/NewAula.vue'; // Asegúrate de que la ruta sea correcta
  import QueryAula from '../components/QueryAula.vue'; // Asegúrate de que la ruta sea correcta
  
  export default {
    components: {
      NewAula,
      QueryAula,
    },
    data() {
      return {
        showList: true,
      };
    },
    // Resto de tu lógica para AulaView.vue
  };
  </script>
  
  <style>
  /* Estilos para AulaView.vue */
  </style>
  