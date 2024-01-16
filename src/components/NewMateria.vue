<template>
  <div>
    <label for="materiaName">Ingrese el nombre de la materia:</label>
    <input type="text" id="materiaName" v-model="materiaName" />
    <button @click="submitmateria">Guardar</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      materiaName: '',
    };
  },
  methods: {
    submitmateria() {
      // Verificar que el campo de nombre no esté vacío antes de enviar la solicitud
      if (!this.materiaName.trim()) {
        alert('Por favor, ingrese el nombre de la materia.');
        return;
      }

      // Realizar la solicitud POST para agregar una nueva materia
      axios.post('http://localhost:3000/materias', { nombre: this.materiaName })
        .then(response => {
          // Mostrar el mensaje de éxito del servidor
          alert(response.data.message);

          // Refrescar la página después del mensaje de éxito
          location.reload();
        })
        .catch(error => {
          console.error('Error al agregar la materia:', error);
          alert('Error al agregar la materia. Por favor, inténtelo de nuevo.');
        });
    },
  },
};
</script>
