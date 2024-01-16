<template>
  <div>
    <label for="fecha">Fecha:</label>
    <input type="text" id="fecha" v-model="fecha" placeholder="Formato: YYYY-MM-DD" />
    
    <label for="hora">Hora:</label>
    <input type="text" id="hora" v-model="hora" placeholder="Formato: HH:MM" />

    <label for="tema">Tema:</label>
    <input type="text" id="tema" v-model="tema" />

    <label for="profesor_id">Profesor:</label>
    <select v-model="profesor_id">
      <option v-for="profesor in profesores" :key="profesor.id" :value="profesor.id">{{ profesor.nombre }}</option>
    </select>

    <label for="materia_id">Materia:</label>
    <select v-model="materia_id">
      <option v-for="materia in materias" :key="materia.id" :value="materia.id">{{ materia.nombre }}</option>
    </select>

    <button @click="submitAula">Guardar</button>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
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
      profesores: [], // Para almacenar la lista de profesores
      materias: [], // Para almacenar la lista de materias
      errorMessage: '', // Nuevo estado para almacenar mensajes de error
    };
  },
  created() {
    console.log('Componente NewAula creado.');

    // Se llama a la función para obtener la lista de profesores y materias al crear el componente
    this.getProfesores();
    this.getMaterias();
  },
  methods: {
    // Función para obtener la lista de profesores
    getProfesores() {
      axios.get('http://localhost:3000/profesores')
        .then(response => {
          this.profesores = response.data;
        })
        .catch(error => {
          console.error('Error al obtener la lista de profesores:', error);
        });
    },

    // Función para obtener la lista de materias
    getMaterias() {
      axios.get('http://localhost:3000/materias')
        .then(response => {
          this.materias = response.data;
        })
        .catch(error => {
          console.error('Error al obtener la lista de materias:', error);
        });
    },

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

          // Refrescar la página después del mensaje de éxito
          location.reload();
        })
        .catch(error => {
          // Capturar el mensaje de error del backend
          if (error.response && error.response.data && error.response.data.error) {
            this.errorMessage = error.response.data.error;
          } else {
            console.error('Error al agregar el aula:', error);
            this.errorMessage = 'Error al agregar el aula. Por favor, inténtelo de nuevo.';
          }
        });
    },
  },
};
</script>
