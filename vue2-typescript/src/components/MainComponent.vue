<template lang="">
  <div>
    <h1>this is main component</h1>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MainComponent extends Vue {
  @Prop({ default: "Hello World!" }) message!: string;
  created() {
    console.log("MainComponent created");
  }
}
</script>
<style lang=""></style>
