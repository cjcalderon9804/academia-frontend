<template>
  <div id="app">
    <header>
      <h1>Academia Python & Asociados</h1>
      <nav>
        <router-link to="/profesor">Profesor</router-link>
        <router-link to="/materia">Materia</router-link>
        <router-link to="/aula">Aula</router-link>

      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2024 Carlos Calderón Cabezas.</p>
    </footer>
  </div>
</template>

<script>
export default {
  // Lógica principal de la aplicación
};
</script>

<style>
/* Estilos generales de la aplicación */
body {
  font-family: 'Arial', sans-serif;
  margin: 0; /* Elimina el margen predeterminado del body */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ocupa al menos el 100% de la altura de la ventana */
}

header {
  background-color: #2196F3; /* Color primario */
  color: white;
  padding: 1rem;
  text-align: center;
}

nav {
  margin-top: 1rem;
}

nav a {
  margin-right: 1rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease; /* Transición suave del color al pasar el ratón */
}

nav a:hover {
  color: #FFC107; /* Cambia el color al pasar el ratón */
}

main {
  flex: 1; /* Ocupa el espacio restante */
  padding: 1rem;
}

footer {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #2196F3; /* Color primario */
  color: white;
  text-align: center;
}
</style>
