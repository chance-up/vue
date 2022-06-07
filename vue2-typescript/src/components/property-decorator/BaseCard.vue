<template lang="html">
  <div>
    <v-card height="100%">
      <v-card-title>{{ cardTitle }}</v-card-title>

      <v-divider />
      <div v-if="isParent">
        <v-card-subtitle style="color: blue">This is Parent</v-card-subtitle>
        <slot name="parent" />
      </div>

      <v-divider />
      <div v-if="isChild">
        <v-card-subtitle style="color: red">This is Child</v-card-subtitle>
        <slot name="child" />
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class BaseCard extends Vue {
  @Prop() cardTitle!: string;
  @Prop({ default: true }) isParent!: boolean;
  @Prop({ default: true }) isChild!: boolean;
}
</script>
