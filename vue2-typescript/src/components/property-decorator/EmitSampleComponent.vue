<template>
  <div>
    <h2>{{ propMsg }}</h2>
    <v-text-field v-model="SyncMessage" label="Child Synced Message"></v-text-field>

    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field label="First name"></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field label="Last name"></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field label="E-mail"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <p />
    <input type="text" v-model="emitValue" />
    <button @click="sendData">Send Message</button>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Model, Prop, PropSync, Vue } from 'vue-property-decorator';

@Component
export default class EmitSampleComponent extends Vue {
  emitValue = 'Emit Value!!!';

  @Emit('sendData')
  sendData() {
    return this.emitValue;
  }
}
</script>
<style lang=""></style>
