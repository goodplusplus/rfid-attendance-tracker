<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="field">
      <label class="label">Username</label>
      <div class="control">
        <input class="input" type="text" name="username" placeholder="Enter your username...">
      </div>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="text" name="password" placeholder="****">
      </div>
    </div>
    <div class="field">
      <button class="button is-link">Submit</button>
    </div>
    <p>{{ loginMessage }}</p>
  </form>
</template>

<script>

import axios from 'axios'
import store from '../store/store';
const API_URL = 'http://localhost:8081/login';

export default {
  name: 'Login',
  data() {
    // eslint-disable-next-line no-console
    console.log(store.state.user);
    return {
      username: "",
      password: "",
      response: "No Response",
    };
  },
  computed: {
    loginMessage: () => {
      if(store.state.login.authentication) {
        return 'Authenticated';
      } else {
        return 'Not Authenticated';
      }
    }
  },
  methods: {
    onSubmit: function(e) {
      axios.post(API_URL, { username: e.target.username.value, password: e.target.password.value })
        // .then(response => { this.response = response.data.id; })
        .then(response => { store.commit('updateUserID', response.data.id); store.commit('updateAuthentication', response.data.status) })
        // eslint-disable-next-line no-console
        .then(console.log(store.state.user))
        // eslint-disable-next-line no-console
        .catch(e => { console.error(e); })
    },
  }
}
</script>
