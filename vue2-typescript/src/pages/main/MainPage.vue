<template>
  <div>
    <MainHeader />
    <router-view />
    <MainFooter />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainHeader from '@/components/layout/MainHeader.vue';
import MainFooter from '@/components/layout/MainFooter.vue';

@Component({
  components: { MainHeader, MainFooter },
})
export default class MainPage extends Vue {
  message = '';
  created() {
    console.log('MainPage created');
  }
  mounted() {
    console.log('MainPage  mounted');
  }

  changeMessage() {
    this.message = 'Hello World!';
  }
}
</script>
<style scoped></style>
