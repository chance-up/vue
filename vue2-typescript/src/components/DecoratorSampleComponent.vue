<template>
  <div>
    <h1>This is Child!</h1>
    <h2>{{ propMsg }}</h2>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DecoratorSampleComponent extends Vue {
  @Prop() propMsg = '';
}
</script>
<style lang=""></style>
