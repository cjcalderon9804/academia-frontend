<template>
  <div>
    <label for="fecha">Fecha:</label>
    <input type="text" id="fecha" v-model="fecha" placeholder="Formato: YYYY-MM-DD" />
    
    <label for="hora">Hora:</label>
    <input type="text" id="hora" v-model="hora" placeholder="Formato: HH:MM" />

    <label for="tema">Tema:</label>
    <input type="text" id="tema" v-model="tema" />

    <label for="profesor_id">ID Profesor:</label>
    <input type="number" id="profesor_id" v-model="profesor_id" />

    <label for="materia_id">ID Materia:</label>
    <input type="number" id="materia_id" v-model="materia_id" />

    <button @click="submitAula">Guardar</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      fecha: '',
      hora: '',
      tema: '',
      profesor_id: null,
      materia_id: null,
    };
  },
  methods: {
    submitAula() {
      // Verificar que todos los campos estén completos antes de enviar la solicitud
      if (!this.fecha.trim() || !this.hora.trim() || !this.tema.trim() || !this.profesor_id || !this.materia_id) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
      }

      // Realizar la solicitud POST para agregar una nueva aula
      axios.post('http://localhost:3000/aulas', {
        fecha: this.fecha,
        hora: this.hora,
        tema: this.tema,
        profesor_id: this.profesor_id,
        materia_id: this.materia_id,
      })
        .then(response => {
          // Mostrar el mensaje de éxito del servidor
          alert(response.data.message);

          // Puedes realizar alguna acción adicional después de agregar el aula, si es necesario.
          // Por ejemplo, redirigir a otra página, actualizar la lista de aulas, etc.

          // Reiniciar los campos después de enviarlos.
          this.fecha = '';
          this.hora = '';
          this.tema = '';
          this.profesor_id = null;
          this.materia_id = null;
        })
        .catch(error => {
          console.error('Error al agregar el aula:', error);
          alert('Error al agregar el aula. Por favor, inténtelo de nuevo.');
        });
    },
  },
};
</script>
