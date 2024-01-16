<template>
  <div>
    <h1>Lista de Aulas de la Academia</h1>
    
    <!-- Se muestra la lista de aulas en una tabla -->
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Tema</th>
          <th>ID Profesor</th>
          <th>ID Materia</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aula in aulas" :key="aula.aula_id">
          <td>{{ aula.aula_id }}</td>
          <td>{{ aula.fecha }}</td>
          <td>{{ aula.hora }}</td>
          <td>{{ aula.tema }}</td>
          <td>{{ aula.profesor_id }}</td>
          <td>{{ aula.materia_id }}</td>
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
      aulas: [], // Almacena la lista de aulas
    };
  },
  created() {
    console.log('Componente QueryAula creado.');
    
    // Llamar a la función para obtener la lista de aulas al crear el componente
    this.getAulas();
  },
  methods: {
    // Función para obtener la lista de aulas utilizando Axios
    getAulas() {
      axios.get('http://localhost:3000/aulas') // Ajusta la URL según tu configuración
        .then(response => {
          this.aulas = response.data;
        })
        .catch(error => {
          console.error('Error al obtener la lista de aulas:', error);
        });
    },
  },
};
</script>
