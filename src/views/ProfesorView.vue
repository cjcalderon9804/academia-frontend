<template>
    <div>
      <h1>Profesores de la Academia</h1>
  
      <!-- Botones para cambiar entre secciones -->
      <div>
        <button @click="showList = true">Consultar Lista de Profesores</button>
        <button @click="showList = false">Agregar Profesor Nuevo</button>
      </div>
  
      <!-- Sección para consultar la lista de profesores -->
      <div>
        <QueryProfesor v-show="showList" />
      </div>
  
      <!-- Sección para agregar un nuevo profesor -->
      <div>
        <NewProfesor v-show="!showList" />
      </div>
    </div>
  </template>
  
  <script>
  import NewProfesor from '../components/NewProfesor.vue'; // Asegúrate de que la ruta sea correcta
  import QueryProfesor from '../components/QueryProfesor.vue'; // Asegúrate de que la ruta sea correcta
  
  export default {
    components: {
      NewProfesor,
      QueryProfesor,
    },
    data() {
      return {
        showList: true,
      };
    },
    // Resto de tu lógica para ProfesorView.vue
  };
  </script>
  
  <style>
  /* Estilos para ProfesorView.vue */
  </style>
  