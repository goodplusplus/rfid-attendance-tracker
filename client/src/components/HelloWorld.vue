<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

const API_URL = 'http://localhost:8081/';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then((result) => { this.msg = result.message; });
    console.log('mounted');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
