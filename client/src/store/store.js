import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    login: {
      authenticated: false,
    },
    user: {
      id: 0,
    },
  },
  mutations: {
    updateUserID(state, id) {
      state.user.id = id;
    },
    updateLoginAuthentication(state, auth) {
      state.login.authenticated = auth;
    }
  }
})

export default store;