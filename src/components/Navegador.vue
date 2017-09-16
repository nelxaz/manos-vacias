<template>
  <v-toolbar class="indigo white--text">
    <v-toolbar-items>
      <v-btn flat class="white--text" to="/done" active-class="active" exact>Done ahora!</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat class="white--text" to="/registro" active-class="active">Registrarse</v-btn>
      <v-btn flat class="white--text" to="/ingresar" active-class="active">Ingresar</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
</script>

<style scoped>

</style>
