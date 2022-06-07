<template>
  <div>
    <v-btn color="primary" @click="showInjectecVariable()">show Injected variable</v-btn>
  </div>
</template>
<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator';

@Component
export default class ProvideInjectSampleComponent extends Vue {
  emitMessage = 'this is child Emit message!!!';
  @Inject() readonly provide1!: string;
  @Inject('provide2Text') readonly localVariable!: string;

  showInjectecVariable() {
    alert('provide1 : ' + this.provide1 + ' \nprovide2 : ' + this.localVariable);
  }
}
</script>
<style lang=""></style>
