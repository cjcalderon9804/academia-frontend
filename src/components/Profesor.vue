<!-- src/components/Profesor.vue -->
<template>
  <div>
    <h2>Profesor Component</h2>

    <!-- Formulario para agregar un nuevo profesor -->
    <form @submit.prevent="agregarProfesor">
      <label for="nombre">Nombre del Profesor:</label>
      <input type="text" v-model="nuevoProfesor.nombre" required>

      <button type="submit">Agregar Profesor</button>
    </form>

    <!-- Sección para mostrar profesores existentes -->
    <div>
      <h3>Profesores existentes:</h3>
      <ul>
        <li v-for="profesor in profesores" :key="profesor.id">
          {{ profesor.nombre }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoProfesor: {
        nombre: '',
      },
      profesores: [], // Aquí almacenarás los profesores existentes, puedes obtenerlos de tu backend
    };
  },
  methods: {
    agregarProfesor() {
      // Aquí deberías realizar la lógica para enviar el nuevo profesor al backend
      // y luego actualizar la lista de profesores
      this.profesores.push({ ...this.nuevoProfesor });
      // Limpia el formulario después de agregar un profesor
      this.nuevoProfesor = {
        nombre: '',
      };
    },
  },
};
</script>

<style scoped>
/* Estilos específicos de Profesor.vue */
</style>
