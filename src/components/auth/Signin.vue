<template >
  <v-container text-xs-center mt-5 pt-5>
    <!-- Error Alert -->
    <v-layout v-if="error" row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <form-alert :message="error.message"></form-alert>
      </v-flex>
    </v-layout>

    <v-card
      max-width="344"
      class="mx-auto"
      color="rgba(255, 255, 255, 0.5)"
      id="card"
      :elevation="10"
      shaped
    >
      <v-card-title>
        <v-row align="center" justify="center">
          <span class="title font-weight-heavy">Sign In</span>
        </v-row>
      </v-card-title>

      <v-card-text>
        <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleSigninUser">
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                :rules="usernameRules"
                v-model="login"
                prepend-icon="face"
                label="Login"
                type="text"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12>
              <v-text-field
                :rules="passwordRules"
                v-model="password"
                prepend-icon="extension"
                label="Password"
                type="password"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-row align="center" justify="center" class="submit-btn">
            <v-btn
              :loading="loading"
              :disabled="!isFormValid || loading"
              color="accent"
              type="submit"
            >
              <span slot="loader" class="custom-loader">
                <v-icon light>cached</v-icon>
              </span>
              Signin
            </v-btn>
          </v-row>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-row align="center" justify="center">
          <h3>
            Don't have an account?
            <router-link to="/signup">Signup</router-link>
          </h3>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Signin",
  data() {
    return {
      isFormValid: true,
      login: "",
      password: "",
      usernameRules: [
        // Check if username in input
        username => !!username || "Username is required"
      ],
      passwordRules: [
        password => !!password || "Password is required",
        // Make sure password is at least 7 characters
        password =>
          password.length >= 7 || "Password must be at least 7 characters"
      ]
    };
  },
  computed: {
    ...mapGetters(["loading", "error", "user"])
  },
  watch: {
    user(value) {
      // if user value changes, redirect to home page
      if (value) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    handleSigninUser() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("signIn", {
          login: this.login,
          password: this.password
        });
      }
    }
  }
};
</script>

<style>
#card {
  padding: 15px;
}

.submit-btn {
  margin: 15px 0 5px 0;
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
