<template>
  <fieldset>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <BaseCard cardTitle="@Prop : one-way">
            <template slot="parent">
              <v-text-field v-model="propMessage" label="Prop"></v-text-field>
            </template>
            <template slot="child">
              <PropSampleComponent :propMsg="propMessage" />
            </template>
          </BaseCard>
        </v-col>
        <v-col cols="12" md="6">
          <BaseCard cardTitle="@PropSync : two-way">
            <template slot="parent">
              <v-text-field v-model="propSyncMessage" label="PropSync"></v-text-field>
            </template>
            <template slot="child">
              <PropSyncSampleComponent :propSyncMsg.sync="propSyncMessage" />
            </template>
          </BaseCard>
        </v-col>
      </v-row>
    </v-container>
  </fieldset>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import BaseCard from '@/components/property-decorator/BaseCard.vue';

import PropSampleComponent from '@/components/property-decorator/PropSampleComponent.vue';
import PropSyncSampleComponent from '@/components/property-decorator/PropSyncSampleComponent.vue';

@Component({
  components: {
    BaseCard,
    PropSampleComponent,
    PropSyncSampleComponent,
  },
})
export default class DecoretorSamplePage extends Vue {
  propMessage = 'Prop Message';
  propSyncMessage = 'PropSync Message';

  modelText = '1234';

  @Watch('message')
  onChangedMessage(v: string) {
    console.log('message changed!', v);
  }

  onReceiveData(newVal: string) {
    console.log('received data!', newVal);
  }
}
</script>
<style></style>
