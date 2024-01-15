<template>
    <div>
      <label for="professorName">Ingrese el nombre del profesor:</label>
      <input type="text" id="professorName" v-model="professorName" />
      <button @click="submitProfessor">Guardar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        professorName: '',
      };
    },
    methods: {
      submitProfessor() {
        // Aquí puedes realizar alguna acción con el nombre del profesor, por ejemplo, enviarlo al servidor.
        console.log('Nombre del profesor:', this.professorName);
        // Puedes reiniciar el campo después de enviarlo.
        this.professorName = '';
      },
    },
  };
  </script>
  