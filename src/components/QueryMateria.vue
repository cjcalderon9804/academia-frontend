<template>
  <div>
    <h1>Lista de Materias de la Academia</h1>
    
    <!-- Se muestra la lista de materias en una tabla -->
    <table class="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="materia in materias" :key="materia.id">
          <td>{{ materia.id }}</td>
          <td>{{ materia.nombre }}</td>
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
      materias: [], // Almacena la lista de materias
    };
  },
  created() {
    console.log('Componente Querymateria creado.');
    
    // Llamar a la función para obtener la lista de materias al crear el componente
    this.getmaterias();
  },
  methods: {
    // Función para obtener la lista de materias utilizando Axios
    getmaterias() {
      axios.get('http://localhost:3000/materias') // Ajusta la URL según tu configuración
        .then(response => {
          this.materias = response.data;
        })
        .catch(error => {
          console.error('Error al obtener la lista de materias:', error);
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
