<template>
  <div>
    <h2>{{ propMsg }}</h2>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PropSampleComponent extends Vue {
  @Prop() propMsg!: string;
}
</script>
<style lang=""></style>
