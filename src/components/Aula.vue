<!-- src/components/Aula.vue -->
<template>
  <div>
    <h2>Aula Component</h2>

    <!-- Formulario para agregar un nuevo aula -->
    <form @submit.prevent="agregarAula">
      <label for="fecha">Fecha:</label>
      <input type="text" v-model="nuevaAula.fecha" required>

      <label for="hora">Hora:</label>
      <input type="text" v-model="nuevaAula.hora" required>

      <label for="tema">Tema:</label>
      <input type="text" v-model="nuevaAula.tema" required>

      <label for="profesor">Profesor:</label>
      <select v-model="nuevaAula.profesor" required>
        <!-- Opciones para profesores, puedes obtenerlas de tu backend -->
        <option value="1">Profesor 1</option>
        <option value="2">Profesor 2</option>
      </select>

      <label for="materia">Materia:</label>
      <select v-model="nuevaAula.materia" required>
        <!-- Opciones para materias, puedes obtenerlas de tu backend -->
        <option value="1">Materia 1</option>
        <option value="2">Materia 2</option>
      </select>

      <button type="submit">Agregar Aula</button>
    </form>

    <!-- Sección para mostrar aulas existentes -->
    <div>
      <h3>Aulas existentes:</h3>
      <ul>
        <li v-for="aula in aulas" :key="aula.id">
          {{ aula.fecha }} - {{ aula.hora }} - {{ aula.tema }} - Profesor: {{ aula.profesor }} - Materia: {{ aula.materia }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevaAula: {
        fecha: '',
        hora: '',
        tema: '',
        profesor: '',
        materia: '',
      },
      aulas: [], // Aquí almacenarás las aulas existentes, puedes obtenerlas de tu backend
    };
  },
  methods: {
    agregarAula() {
      // Aquí deberías realizar la lógica para enviar la nueva aula al backend
      // y luego actualizar la lista de aulas
      this.aulas.push({ ...this.nuevaAula });
      // Limpia el formulario después de agregar un aula
      this.nuevaAula = {
        fecha: '',
        hora: '',
        tema: '',
        profesor: '',
        materia: '',
      };
    },
  },
};
</script>

<style scoped>
/* Estilos específicos de Aula.vue */
</style>
