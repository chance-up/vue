<template>
  <div>
    <h1>Login Page!</h1>
    <h2>Email:</h2>
    <input type="text" v-model="email" />
    <p />
    <h2>Password:</h2>
    <input type="password" v-model="password" />
    <p />
    <button type="button" @click="login()">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(this.email);
      console.log(this.password);
    },
  },
};
</script>

<style lang="scss" scoped></style>
