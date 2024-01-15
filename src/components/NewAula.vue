<template>
    <div>
      <label for="classroomName">Ingrese el nombre del aula:</label>
      <input type="text" id="classroomName" v-model="classroomName" />
      <button @click="submitClassroom">Guardar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        classroomName: '',
      };
    },
    methods: {
      submitClassroom() {
        // Aquí puedes realizar alguna acción con el nombre del aula, por ejemplo, enviarlo al servidor.
        console.log('Nombre del aula:', this.classroomName);
        // Puedes reiniciar el campo después de enviarlo.
        this.classroomName = '';
      },
    },
  };
  </script>
  