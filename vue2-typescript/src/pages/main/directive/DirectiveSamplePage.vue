<template>
  <div>
    <h1>v-if</h1>
    <span v-if="show">Hide</span>
    <span v-else>Show</span>

    <h1>v-html(deprecated)</h1>
    <span v-html="message"></span>

    <h1>v-bind:html</h1>
    <span v-bind:html="message"></span>

    <h1>v-bind:text</h1>
    <span v-bind:text="message"></span>

    <h1>v-bind:class</h1>
    <span v-bind:class="{ active: isActive }"></span>

    <h1>v-bind:style</h1>
    <span v-bind:style="{ color: 'red' }"></span>

    <h1>v-bind:key</h1>
    <ul>
      <li v-for="(item, index) in items" v-bind:key="index">{{ item }}</li>
    </ul>

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
