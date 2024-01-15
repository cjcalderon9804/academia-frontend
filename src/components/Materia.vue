<!-- src/components/Materia.vue -->
<template>
  <div>
    <h2>Materia Component</h2>

    <!-- Formulario para agregar una nueva materia -->
    <form @submit.prevent="agregarMateria">
      <label for="nombre">Nombre de la Materia:</label>
      <input type="text" v-model="nuevaMateria.nombre" required>

      <button type="submit">Agregar Materia</button>
    </form>

    <!-- Sección para mostrar materias existentes -->
    <div>
      <h3>Materias existentes:</h3>
      <ul>
        <li v-for="materia in materias" :key="materia.id">
          {{ materia.nombre }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevaMateria: {
        nombre: '',
      },
      materias: [], // Aquí almacenarás las materias existentes, puedes obtenerlas de tu backend
    };
  },
  methods: {
    agregarMateria() {
      // Aquí deberías realizar la lógica para enviar la nueva materia al backend
      // y luego actualizar la lista de materias
      this.materias.push({ ...this.nuevaMateria });
      // Limpia el formulario después de agregar una materia
      this.nuevaMateria = {
        nombre: '',
      };
    },
  },
};
</script>

<style scoped>
/* Estilos específicos de Materia.vue */
</style>
