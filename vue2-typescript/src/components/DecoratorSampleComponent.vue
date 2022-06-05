<template>
  <div>
    <h1>This is Child!</h1>
    <h2>{{ propMsg }}</h2>
    <input type="text" v-model="SyncMessage" />
    <p />
    <input type="text" v-model="emitValue" />
    <button @click="sendData">Send Message</button>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Prop, PropSync, Vue } from 'vue-property-decorator';

@Component
export default class DecoratorSampleComponent extends Vue {
  @Prop() propMsg!: string;
  @PropSync('SyncMessage') propSyncMessage!: string;

  emitValue = 'Emit Value!!!';

  @Emit('sendData')
  sendData() {
    return this.emitValue;
  }
}
</script>
<style lang=""></style>
