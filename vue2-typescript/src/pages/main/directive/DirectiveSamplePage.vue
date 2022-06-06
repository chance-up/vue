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
    <v-btn color="primary" @click="toggleVif()">toggle </v-btn>

    <h1>v-for</h1>
    <ul>
      <li v-for="(item, idx) in exList" :key="idx">{{ item }}</li>
    </ul>

    <h1>v-bind:class</h1>
    <span
      :class="{
        active: act == true,
        deactive: act == false,
      }"
      >This is Class binding</span
    >
    <p />
    <v-btn color="primary" @click="toggleClass()">toggle </v-btn>

    <h1>v-bind:style</h1>
    <span v-bind:style="{ color: 'red' }"> This is Style Binding</span>

    <h1>v-model</h1>
    <h2>{{ message }}</h2>
    <v-text-field type="text" v-model="message" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DirectiveSamplePage extends Vue {
  exText = 'this is exText';
  show = true;
  message = 'this is v-model Message';
  exHtml = "<span style='color:red;'> this is exHtml </span>";
  exList = ['a', 'b', 'c'];
  act = false;

  data() {
    return {};
  }
  toggleVif() {
    this.show = !this.show;
  }
  toggleClass() {
    this.act = !this.act;
  }
}
</script>
<style scoped>
.active {
  color: red;
}
.deactive {
  color: blue;
}
</style>
