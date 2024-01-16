<template>
  <div>
    <label for="profesorName">Ingrese el nombre del profesor:</label>
    <input type="text" id="profesorName" v-model="profesorName" />
    <button @click="submitProfesor">Guardar</button>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      profesorName: '',
      errorMessage: '', // Nuevo estado para almacenar mensajes de error
    };
  },
  methods: {
    submitProfesor() {
      // Verificar que el campo de nombre no esté vacío antes de enviar la solicitud
      if (!this.profesorName.trim()) {
        alert('Por favor, ingrese el nombre del profesor.');
        return;
      }

      // Realizar la solicitud POST para agregar un nuevo profesor
      axios.post('http://localhost:3000/profesores', { nombre: this.profesorName })
        .then(response => {
          // Mostrar el mensaje de éxito del servidor
          alert(response.data.message);

          // Refrescar la página después del mensaje de éxito
          location.reload();
        })
        .catch(error => {
          // Capturar el mensaje de error del backend
          if (error.response && error.response.data && error.response.data.error) {
            this.errorMessage = error.response.data.error;
          } else {
            console.error('Error al agregar el profesor:', error);
            this.errorMessage = 'Error al agregar el profesor. Por favor, inténtelo de nuevo.';
          }
        });
    },
  },
};
</script>
