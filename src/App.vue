<template>
  <v-app id="welcome">
    <nav-bar v-if="auth"></nav-bar>
    <!-- Sizes your content based upon application components -->
    <v-content id="container">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>FOOTER</v-footer>
  </v-app>
</template>

<script>
import NavBar from "./components/shared/header/NavBar";
export default {
  name: "App",

  components: {
    "nav-bar": NavBar
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style scoped>
#container {
  background-color: #fafafa;
}

#welcome {
  background-image: url("./assets/welcome.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style> scoped>

