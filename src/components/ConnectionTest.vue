<!-- src/components/ConnectionTest.vue -->
<template>
    <div>
      <h2>Comprobación de Conexión</h2>
      <button @click="testConnection">Probar Conexión</button>
      <div v-if="connectionStatus !== null">
        <p>{{ connectionStatus ? 'Conexión exitosa' : 'Fallo en la conexión' }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        connectionStatus: null,
      };
    },
    methods: {
      testConnection() {
        // Realizar una solicitud GET al backend para comprobar la conexión
        this.$http.get('/test-connection')
          .then(() => {
            this.connectionStatus = true;
          })
          .catch(() => {
            this.connectionStatus = false;
          });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para el componente de prueba de conexión */
  </style>
  