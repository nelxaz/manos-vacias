<template>
  <div id="app">
    <v-app>
      <app-navegador></app-navegador>
      <main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import Navegador from './components/Navegador'
import Cabecera from './components/Cabecera'
export default {
  name: 'app',
  components: {
    appNavegador: Navegador,
    appCabecera: Cabecera
  }
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
