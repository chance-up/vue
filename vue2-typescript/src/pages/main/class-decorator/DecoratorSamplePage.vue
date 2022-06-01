<template>
  <div>
    <h1>This is Parent</h1>
    <input type="text" v-model="message" />
    <button @click="changeMessage">Change Message</button>
    <DecoratorSampleComponent :propMsg="message" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DecoratorSampleComponent from '@/components/DecoratorSampleComponent.vue';

@Component({
  components: {
    DecoratorSampleComponent,
  },
})
export default class DecoretorSamplePage extends Vue {
  message = '';

  changeMessage() {
    this.message = 'Hello World!';
  }
}
</script>
<style></style>
