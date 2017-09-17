<template>
  <v-layout row>
    <v-flex xs12 sm12>
      <v-card class="grid">
        <v-toolbar class="white elevation-0">
          <v-toolbar-title class="grey--text text--darken-4">Puedes ayudar a estos ninos</v-toolbar-title>
        </v-toolbar>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex xs2 v-for="i in 6" :key="i">
              <img class="image" v-bind:src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex xs2 v-for="i in 6" :key="i">
              <img class="image" v-bind:src="`https://randomuser.me/api/portraits/women/${i + 5}.jpg`" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
        <v-footer class="mt-5"></v-footer>
      </v-card>
    </v-flex>
  </v-layout>
</template>

