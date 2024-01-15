<template>
    <div>
      <label for="subjectName">Ingrese el nombre de la materia:</label>
      <input type="text" id="subjectName" v-model="subjectName" />
      <button @click="submitSubject">Guardar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        subjectName: '',
      };
    },
    methods: {
      submitSubject() {
        // Aquí puedes realizar alguna acción con el nombre de la materia, por ejemplo, enviarlo al servidor.
        console.log('Nombre de la materia:', this.subjectName);
        // Puedes reiniciar el campo después de enviarlo.
        this.subjectName = '';
      },
    },
  };
  </script>
  