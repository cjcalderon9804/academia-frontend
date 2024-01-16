<template>
  <div>
    <h1>Lista de Aulas de la Academia</h1>

    <!-- Se muestra la lista de aulas en una tabla -->
    <table class="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Tema</th>
          <th>Profesor</th>
          <th>Materia</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="aula in aulas" :key="aula.aula_id">
          <td>{{ aula.aula_id }}</td>
          <td>{{ aula.fecha }}</td>
          <td>{{ aula.hora }}</td>
          <td>{{ aula.tema }}</td>
          <td>{{ getProfesorName(aula.profesor_id) }}</td>
          <td>{{ getMateriaName(aula.materia_id) }}</td>
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
      profesores: {}, // Almacena los nombres de los profesores
      materias: {}, // Almacena los nombres de las materias
    };
  },
  created() {
    console.log('Componente QueryAula creado.');

    // Llamar a la función para obtener la lista de aulas al crear el componente
    this.getAulas();
    this.getProfesores();
    this.getMaterias();
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

    // Función para obtener la lista de profesores
    getProfesores() {
      axios.get('http://localhost:3000/profesores') // Ajusta la URL según tu configuración
        .then(response => {
          response.data.forEach(profesor => {
            this.profesores[profesor.id] = profesor.nombre;
          });
        })
        .catch(error => {
          console.error('Error al obtener la lista de profesores:', error);
        });
    },

    // Función para obtener la lista de materias
    getMaterias() {
      axios.get('http://localhost:3000/materias') // Ajusta la URL según tu configuración
        .then(response => {
          response.data.forEach(materia => {
            this.materias[materia.id] = materia.nombre;
          });
        })
        .catch(error => {
          console.error('Error al obtener la lista de materias:', error);
        });
    },

    // Función para obtener el nombre del profesor basado en su ID
    getProfesorName(profesorId) {
      return this.profesores[profesorId] || 'Desconocido';
    },

    // Función para obtener el nombre de la materia basado en su ID
    getMateriaName(materiaId) {
      return this.materias[materiaId] || 'Desconocida';
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
