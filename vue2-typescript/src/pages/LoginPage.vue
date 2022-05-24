<template>
  <div>
    <h1>This is MainPage!</h1>
    <h2>{{ message }}</h2>
    <input type="text" v-model="message" />
    <button @click="changeMessage">Change Message</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginPage extends Vue {
  message = "";

  changeMessage() {
    this.message = "Hello World!";
  }
}
</script>
<style>
.tps-chart-background {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.tps-chart-transition {
  background-color: #8041f7;
  border-radius: 8px;
  transform: scale(2);
  /* transform-origin: right bottom; */
  transition: all 0.3s ease-in-out;
}
.tps-chart-transition-compact {
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}
</style>
