<template>
  <fieldset>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <BaseCard cardTitle="@Prop : one-way(parent -> child)">
            <template slot="parent">
              <v-text-field v-model="propMessage" label="@Prop"></v-text-field>
            </template>
            <template slot="child">
              <PropSampleComponent :propMsg="propMessage" />
            </template>
          </BaseCard>
        </v-col>
        <v-col cols="12" md="4">
          <BaseCard cardTitle="@PropSync : two-way(parent <-> child)">
            <template slot="parent">
              <v-text-field v-model="propSyncMessage" label="@PropSync"></v-text-field>
            </template>
            <template slot="child">
              <PropSyncSampleComponent :propSyncMsg.sync="propSyncMessage" />
            </template>
          </BaseCard>
        </v-col>
        <v-col cols="12" md="4">
          <BaseCard cardTitle="@Watch : observing some variable" :isChild="false">
            <template slot="parent">
              <v-text-field v-model="watchMessage" label="@Watch"></v-text-field>
            </template>
          </BaseCard>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <BaseCard cardTitle="@Emit : call parent method and variable">
            <template slot="parent">
              <h4>{{ emitMessage }}</h4>
            </template>
            <template slot="child">
              <EmitSampleComponent @sendData="onReceiveData" />
            </template>
          </BaseCard>
        </v-col>
        <v-col cols="12" md="4">
          <BaseCard cardTitle="@Ref : get DOM element">
            <template slot="parent">
              <v-text-field
                v-model="refMessage"
                label="@Ref"
                id="refInputId"
                class="refInputClass"
                ref="refInput"
              ></v-text-field>
              <v-btn color="primary" id="refBtnId" class="refBtnClass" ref="refBtn">Sample Button</v-btn>
              <p />
              <v-btn color="primary" @click="callChildMethod">call Child Method by @Ref</v-btn>
              <p />
              <v-btn color="primary" @click="getElement">getElement(console)</v-btn>
            </template>
            <template slot="child">
              <RefSampleComponent ref="refChild" />
            </template>
          </BaseCard>
        </v-col>
        <v-col cols="12" md="4">
          <BaseCard cardTitle="@Model : can use the v-model directive in custom components. ">
            <template slot="parent">
              <v-text-field v-model="modelMessage"></v-text-field>
            </template>
            <template slot="child">
              <ModelSampleComponent v-model="modelMessage" />
            </template>
          </BaseCard>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <BaseCard cardTitle="@Provide/@Inject : Injection">
            <template slot="parent">
              {{ provide1 }}
            </template>
            <template slot="child">
              <ProvideInjectSampleComponent />
            </template>
          </BaseCard>
        </v-col>
        <v-col cols="12" md="4">
          <BaseCard cardTitle="@ProvideReactive/@InjectReactive : Reactive Injection ">
            <template slot="parent">
              <v-text-field v-model="provideReactive1" label="provideReactive1"></v-text-field>
              <v-text-field v-model="provideReactive2" label="provideReactive2"></v-text-field>
            </template>
            <template slot="child">
              <ProvideInjectReactiveSampleComponent />
            </template>
          </BaseCard>
        </v-col>
      </v-row>
    </v-container>
  </fieldset>
</template>
<script lang="ts">
import { Component, Provide, ProvideReactive, Ref, Vue, Watch } from 'vue-property-decorator';
import BaseCard from '@/components/property-decorator/BaseCard.vue';

import PropSampleComponent from '@/components/property-decorator/PropSampleComponent.vue';
import PropSyncSampleComponent from '@/components/property-decorator/PropSyncSampleComponent.vue';
import EmitSampleComponent from '@/components/property-decorator/EmitSampleComponent.vue';
import RefSampleComponent from '@/components/property-decorator/RefSampleComponent.vue';
import ModelSampleComponent from '@/components/property-decorator/ModelSampleComponent.vue';
import ProvideInjectSampleComponent from '@/components/property-decorator/ProvideInjectSampleComponent.vue';
import ProvideInjectReactiveSampleComponent from '@/components/property-decorator/ProvideInjectReactiveSampleComponent.vue';

@Component({
  components: {
    BaseCard,
    PropSampleComponent,
    PropSyncSampleComponent,
    EmitSampleComponent,
    RefSampleComponent,
    ModelSampleComponent,
    ProvideInjectSampleComponent,
    ProvideInjectReactiveSampleComponent,
  },
})
export default class DecoretorSamplePage extends Vue {
  propMessage = 'Prop Message';
  propSyncMessage = 'PropSync Message';
  watchMessage = 'Watch Message';
  emitMessage = 'Emit Message';
  refMessage = 'Ref Message';
  modelMessage = 'Model Message';

  @Watch('watchMessage')
  onChangedMessage(v: string) {
    alert('Watch Message Changed! : ' + v);
  }

  onReceiveData(v: string) {
    this.emitMessage = v;
  }

  // If the type is specified, an error 'does not exist on type' occurs, so set it to any
  //@Ref() readonly refChild!: RefSampleComponent; // <- Error: TS2339: Property '???' does not exist on type 'Vue'.
  // eslint-disable-next-line
  @Ref() refBtn: any;
  // eslint-disable-next-line
  @Ref() refInput: any;
  // eslint-disable-next-line
  @Ref() readonly refChild: any;

  public callChildMethod() {
    this.refChild.sampleMethod();
  }
  getElement() {
    console.log(this.refBtn);
    console.log(this.refInput);
    console.log(this.refChild);
  }

  @Provide() provide1 = 'this is provide1';
  @Provide('provide2Text') provide2 = 'this is provide2';

  @ProvideReactive() provideReactive1 = 'this is provideReactive1';
  @ProvideReactive('provideReactive2Text') provideReactive2 = 'this is provideReactive2';
}
</script>
<style></style>
