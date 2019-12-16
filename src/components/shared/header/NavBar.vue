<template>
  <div>
    <!-- <v-card class="overflow-hidden"> -->
    <v-app-bar dark flat height="60">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-list-item-avatar color="grey darken-3">
        <v-img class="elevation-6" src="../../../assets/logo.png"></v-img>
      </v-list-item-avatar>

      <v-toolbar-title style="company-title">CMS - Employee</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn v-if="!auth" to="/signup" text>Sign Up</v-btn>
      <v-btn v-if="!auth" to="/signin" text>Sign In</v-btn>
      <v-menu left bottom v-if="auth">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="() => {}">
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-list-item @click="onLogout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension v-if="auth">
        <v-tabs align-with-title background-color="transparent">
          <v-tab to="/">Home</v-tab>
          <v-tab to="/user">My Info</v-tab>
          <v-tab to="/employees">Employees</v-tab>
          <v-tab to="/reports">Reports</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  components: {},

  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("signOut");
    }
  }
};
</script>

<style scoped>
.v-toolbar__title {
  padding-bottom: 0px;
}
</style>
