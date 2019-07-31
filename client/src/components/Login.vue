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
    <p>{{ response }}</p>
  </form>
</template>

<script>

import axios from 'axios'
const API_URL = 'http://localhost:8081/login';

export default {
  name: 'Login',
  data() {
    return {
      username: "",
      password: "",
      response: "No Response",
    };
  },
  methods: {
    onSubmit: function(e) {
      axios.post(API_URL, { username: e.target.username.value, password: e.target.password.value })
        .then(response => { this.response = response.data.message; })
        // eslint-disable-next-line no-console
        .catch(e => { console.error(e); })
    },
  }
}
</script>
