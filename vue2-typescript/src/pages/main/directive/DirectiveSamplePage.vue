<template>
  <div>
    <h1>This is Directive Page!</h1>
    <h2>{{ message }}</h2>
    <input type="text" v-model="message" />
    <button @click="changeMessage">Change Message</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DirectiveSamplePage extends Vue {
  message = '';

  changeMessage() {
    this.message = 'Hello World!';
  }
}
</script>
<style></style>
