<template>

  <v-app>
    <Login />
    <v-app-bar
      app
      color="red darken-1"
      dark
    >
    
      <!-- <div class="d-flex align-center"> 
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->

      <v-spacer></v-spacer>
      <v-btn to='/home' >
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn to='/employee' >
        <span class="mr-2">Employee</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Login from './pages/login.vue'
import { employeeModel } from './models/employee-model'
export default Vue.extend({
  name: 'App',
  components: {
    Login,
  },
  data: () => ({
    // isLogin: employeeModel.isLogin,
  }),
});
</script>
