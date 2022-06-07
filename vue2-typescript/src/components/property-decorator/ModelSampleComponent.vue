<template>
  <div>
    <!-- <v-text-field v-model="modelMessage" label="Emit"></v-text-field> -->
    <h4>{{ modelMessage }}</h4>

    <!-- <v-btn color="primary" @click="sendData()">send variable to parent</v-btn> -->
  </div>
</template>
<script lang="ts">
import { Component, Model, Vue } from 'vue-property-decorator';

@Component
export default class ModelSampleComponent extends Vue {
  @Model('modelMsg', { type: String }) readonly modelMessage!: string;
}
</script>
<style lang=""></style>
