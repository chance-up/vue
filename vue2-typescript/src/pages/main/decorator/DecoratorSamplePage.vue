<template>
  <div>
    <h1>This is DecoretorSamplePages !</h1>
    <h2>{{ message }}</h2>
    <input type="text" v-model="message" />
    <button @click="changeMessage">Change Message</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DecoretorSamplePage extends Vue {
  message = '';

  changeMessage() {
    this.message = 'Hello World!';
  }
}
</script>
<style></style>
