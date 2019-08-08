import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    login: {
      authentication: false,
    },
    user: {
      id: 0,
    },
  },
  mutations: {
    updateUserID(state, id) {
      state.user.id = id;
    },
    updateAuthentication(state, auth) {
      state.login.authentication = auth;
    }
  }
})

export default store;