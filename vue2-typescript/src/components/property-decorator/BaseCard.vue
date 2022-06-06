<template lang="html">
  <div>
    <v-card height="100%">
      <v-card-title>{{ cardTitle }}</v-card-title>
      <v-divider />
      <v-card-subtitle style="color: blue">This is Parent</v-card-subtitle>
      <slot name="parent" />
      <v-divider />
      <v-card-subtitle style="color: red">This is Child</v-card-subtitle>
      <slot name="child" />
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class BaseCard extends Vue {
  @Prop() cardTitle!: string;
}
</script>
