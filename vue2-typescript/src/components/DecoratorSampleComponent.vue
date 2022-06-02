<template>
  <div>
    <h1>This is Child!</h1>
    <h2>{{ propMsg }}</h2>
    <input type="text" v-model="SyncMessage" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

@Component
export default class DecoratorSampleComponent extends Vue {
  @Prop() propMsg!: string;
  @PropSync('SyncMessage') propSyncMessage!: string;
}
</script>
<style lang=""></style>
