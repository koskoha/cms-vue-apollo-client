import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
import FormAlert from "./components/shared/FormAlert";
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";
import "./scss/style.scss";

Vue.use(VueApollo);
Vue.use(VueFormGenerator);

// Register Global Component
Vue.component("form-alert", FormAlert);

// Setup ApolloClient
export const defaultClient = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  // include auth token with requests made to backend
  // fetchOptions: {
  //   credentials: "include"
  // },
  request: operation => {
    // if no token with key of 'token' in localStorage, add it
    if (!localStorage.token) {
      localStorage.setItem("token", "");
    }

    // operation adds the token to an authorization header, which is sent to backend
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      console.log("[networkError]", networkError);
    }

    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.dir(err);
        if (err.name === "AuthenticationError") {
          // set auth error in state (to show in snackbar)
          store.commit("setAuthError", err);
          // signout user (to clear token)
          store.dispatch("signOut");
        }
      }
    }
  }
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  provide: apolloProvider.provide(),
  render: h => h(App),
  created() {
    // execute getCurrentUser query
    this.$store.dispatch("getCurrentUser");
  }
}).$mount("#app");
