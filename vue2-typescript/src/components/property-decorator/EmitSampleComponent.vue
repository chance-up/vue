<template>
  <div>
    <v-text-field v-model="emitMessage" label="Emit"></v-text-field>
    <v-btn color="primary" @click="sendData()">send variable to parent</v-btn>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';

@Component
export default class EmitSampleComponent extends Vue {
  emitMessage = 'this is child Emit message!!!';

  @Emit('sendData')
  sendData() {
    return this.emitMessage;
  }
}
</script>
<style lang=""></style>
