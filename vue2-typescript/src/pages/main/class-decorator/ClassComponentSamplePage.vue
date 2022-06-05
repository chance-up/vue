<template>
  <div>
    <h1>This is ClassComponentSamplePage !</h1>
    <h2>{{ message }}</h2>
    <input type="text" v-model="message" />
    <button @click="changeMessage">Change Message</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ClassComponentSamplePage extends Vue {
  message = '';
  test = undefined;
  test1 = null;

  changeMessage() {
    this.message = 'Hello World!';
  }
}
</script>
<style></style>
