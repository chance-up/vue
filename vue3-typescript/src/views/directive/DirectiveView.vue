<template>
  <div>
    <h1>v-text(innerText)</h1>
    <p v-text="exText"></p>

    <h1>v-html(innerHtml)</h1>
    <span v-html="exHtml"></span>

    <h1>v-if, v-else</h1>
    <span v-if="show">this is v-if="true"</span>
    <span v-else>this is v-if="false"(v-else)</span>
    <p></p>
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
    <p></p>
    <v-btn color="primary" @click="toggleClass()">toggle </v-btn>

    <h1>v-bind:style</h1>
    <span v-bind:style="{ color: 'red' }"> This is Style Binding</span>

    <h1>v-model</h1>
    <h2>{{ message }}</h2>
    <input type="text" v-model="message" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
//  vue 관련 에러 뜨는거 처리 필요. 라이브러리 문제거나 prettier, eslint문제인듯
const exText = ref('this is exText');
const show = ref(true);
const message = ref('this is v-model Message');
const exHtml = ref("<span style='color:red;'> this is exHtml </span>");
const exList = ref(['a', 'b', 'c']);
const act = ref(false);
const toggleVif = () => {
  show.value = !show.value;
};
const toggleClass = () => {
  act.value = act.value;
};
</script>

<style scoped></style>
