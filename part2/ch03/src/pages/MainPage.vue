<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      property: "value",
    };
  },
};
</script>

<style lang="scss" scoped></style>
