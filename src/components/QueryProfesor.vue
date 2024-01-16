<template>
  <div>
    <h1>Lista de Profesores de la Academia</h1>
    
    <!-- Mostrar la lista de profesores en una tabla -->
    <table class="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="profesor in profesores" :key="profesor.id">
          <td>{{ profesor.id }}</td>
          <td>{{ profesor.nombre }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      profesores: [], // Almacena la lista de profesores
    };
  },
  created() {
    console.log('Componente QueryProfesor creado.');
    
    // Llamar a la función para obtener la lista de profesores al crear el componente
    this.getProfesores();
  },
  methods: {
    // Función para obtener la lista de profesores utilizando Axios
    getProfesores() {
      axios.get('http://localhost:3000/profesores') // Ajusta la URL según tu configuración
        .then(response => {
          this.profesores = response.data;
        })
        .catch(error => {
          console.error('Error al obtener la lista de profesores:', error);
        });
    },
  },
};
</script>

<style>
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 18px;
  text-align: center;
}

.styled-table th, .styled-table td {
  border: 1px solid #ddd;
  padding: 10px;
}

.styled-table th {
  background-color: #f2f2f2;
}
</style>
