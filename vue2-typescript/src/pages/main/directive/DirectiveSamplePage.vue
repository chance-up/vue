<template>
  <div>
    <h1>v-text(innerText)</h1>
    <p v-text="exText"></p>

    <h1>v-html(innerHtml)</h1>
    <span v-html="exHtml"></span>

    <h1>v-if, v-else</h1>
    <span v-if="show">this is v-if="true"</span>
    <span v-else>this is v-if="false"(v-else)</span>
    <p />
    <button @click="toggle()">toggle</button>

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
  exText = 'this is exText';
  show = true;
  message = '';
  exHtml = "<span style='color:red;'> this is exHtml </span>";

  data() {
    return {
      // `hello` will be reactive as it is declared via `data` hook.

      hello: undefined,
    };
  }
  changeMessage() {
    this.message = 'Hello World!';
  }

  toggle() {
    this.show = !this.show;
  }
}
</script>
<style></style>
