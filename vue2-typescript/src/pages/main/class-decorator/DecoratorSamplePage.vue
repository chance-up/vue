<template>
  <div>
    <h1>This is Parent</h1>
    <input type="text" v-model="message" />
    <button @click="changeMessage">Change Message</button>
    <DecoratorSampleComponent :propMsg="message" :propSyncMessage.sync="syncedMessage" />
    <h1>{{ syncedMessage }}</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import DecoratorSampleComponent from '@/components/DecoratorSampleComponent.vue';

@Component({
  components: {
    DecoratorSampleComponent,
  },
})
export default class DecoretorSamplePage extends Vue {
  message = '';
  syncedMessage = '';

  changeMessage() {
    this.message = 'Hello World!';
  }

  @Watch('message')
  onChangedMessage(v:string){
    console.log('message changed!',v);
  }
}
</script>
<style></style>
