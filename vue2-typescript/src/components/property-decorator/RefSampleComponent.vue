<template>
  <div>
    <v-text-field v-model="refMessage" label="@Ref"></v-text-field>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RefSampleComponent extends Vue {
  refMessage = 'this is @Ref child Message';
  public sampleMethod() {
    alert('this is child Method! : ' + this.refMessage);
  }
}
</script>
<style lang=""></style>
