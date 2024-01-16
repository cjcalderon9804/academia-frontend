<template>
  <div>
    <label for="profesorName">Ingrese el nombre del profesor:</label>
    <input type="text" id="profesorName" v-model="profesorName" />
    <button @click="submitProfesor">Guardar</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      profesorName: '',
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
          console.error('Error al agregar el profesor:', error);
          alert('Error al agregar el profesor. Por favor, inténtelo de nuevo.');
        });
    },
  },
};
</script>
