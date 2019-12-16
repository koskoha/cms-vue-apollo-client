<template>
  <v-container text-xs-center mt-5 pt-5>
    <!-- Error Alert -->
    <v-layout v-if="error" row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <form-alert :message="error.message"></form-alert>
      </v-flex>
    </v-layout>

    <!-- Signup Form -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card
          color="rgba(255, 255, 255, 0.5)"
          max-width="344"
          class="mx-auto"
          id="card"
          :elevation="10"
          shaped
        >
          <v-card-title>
            <v-row align="center" justify="center">
              <span class="title font-weight-heavy">Sign Up</span>
            </v-row>
          </v-card-title>

          <v-card-text>
            <v-form
              v-model="isFormValid"
              lazy-validation
              ref="form"
              @submit.prevent="handleSignupUser"
            >
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    :rules="usernameRules"
                    v-model="username"
                    prepend-icon="face"
                    label="Username"
                    type="text"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    :rules="emailRules"
                    v-model="email"
                    prepend-icon="email"
                    label="Email"
                    type="email"
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

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    :rules="passwordRules"
                    v-model="passwordConfirmation"
                    prepend-icon="gavel"
                    label="Confirm Password"
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
                  Signup
                </v-btn>
              </v-row>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-row align="center" justify="center">
              <h3>
                Already have an account?
                <router-link to="/signin">Login</router-link>
              </h3>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Signup",
  data() {
    return {
      isFormValid: true,
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      usernameRules: [
        username => !!username || "Username is required",
        username =>
          username.length < 10 || "Username cannot be more than 10 characters"
      ],
      emailRules: [
        email => !!email || "Email is required",
        email => /.@+./.test(email) || "Email must be valid"
      ],
      passwordRules: [
        password => !!password || "Password is required",
        password =>
          password.length >= 4 || "Password must be at least 4 characters",
        confirmation => confirmation === this.password || "Passwords must match"
      ]
    };
  },
  watch: {
    user(value) {
      // if user value changes, redirect to home page
      if (value) {
        this.$router.push("/");
      }
    }
  },
  computed: {
    ...mapGetters(["loading", "error", "user"])
  },
  methods: {
    handleSignupUser() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("signUp", {
          username: this.username,
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>
