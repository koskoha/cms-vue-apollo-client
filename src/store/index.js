import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

import { defaultClient as apolloClient } from "../main";

import { GET_CURRENT_USER, SIGNIN_USER, SIGNUP_USER } from "../graphql/queries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    authError: null
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    setError: (state, payload) => {
      state.error = payload;
    },
    setAuthError: (state, payload) => {
      state.authError = payload;
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null)
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true);
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          console.log("data:", data);
          commit("setLoading", false);
          // Add user data to state
          commit("setUser", data.currentUser);
          console.log(data.getCurrentUser);
        })
        .catch(async err => {
          commit("setLoading", false);
          console.error(err);
          commit("clearUser");
          localStorage.setItem("token", "");
          await apolloClient.resetStore();
          router.go();
        });
    },

    signIn: ({ commit }, payload) => {
      commit("clearError");
      commit("setLoading", true);
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(res => {
          console.log("res:", res);
          commit("setLoading", false);
          localStorage.setItem("token", res.data.signIn.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.error(err);
        });
    },
    signUp: ({ commit }, payload) => {
      commit("clearError");
      commit("setLoading", true);
      apolloClient
        .mutate({
          mutation: SIGNUP_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false);
          localStorage.setItem("token", data.signUp.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.error(err);
        });
    },
    signOut: async ({ commit }) => {
      // clear user in state
      commit("clearUser");
      // remove token in localStorage
      localStorage.setItem("token", "");
      // end session
      await apolloClient.resetStore();
      // redirect home - kick users out of private pages (i.e. profile)
      // router.push("/");
      router.go();
    }
  },
  getters: {
    isAuthenticated: state => state.user !== null,
    user: state => state.user,
    loading: state => state.loading,
    error: state => state.error,
    authError: state => state.authError
  }
});
