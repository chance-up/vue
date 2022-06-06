<template>
  <div>
    <h2>{{ propSyncMsg }}</h2>
    <v-btn color="primary" @click="test()">change Parent Value</v-btn>
  </div>
</template>
<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';

@Component
export default class PropSyncSampleComponent extends Vue {
  @PropSync('propSyncMsg', { type: String }) propSyncMessage!: string;

  test() {
    this.propSyncMessage = 'this is message by child';
  }
}
</script>
<style lang=""></style>
