<template>
  <div>
    <v-btn color="primary" @click="showInjectecVariable()">show Injected variable</v-btn>
  </div>
</template>
<script lang="ts">
import { Component, InjectReactive, Vue } from 'vue-property-decorator';

@Component
export default class ProvideInjectReactiveSampleComponent extends Vue {
  emitMessage = 'this is child Emit message!!!';
  @InjectReactive() readonly provideReactive1!: string;
  @InjectReactive('provideReactive2Text') readonly provideReactive2!: string;

  showInjectecVariable() {
    alert('provide1 : ' + this.provideReactive1 + ' \nprovide2 : ' + this.provideReactive2);
  }
}
</script>
<style lang=""></style>
