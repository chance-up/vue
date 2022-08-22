<template>
  <Modal v-if="showModal" @no="hide(false)" @ok="hide(true)" />
  <button @click="choiModal()">Show Modal</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from './Modal.vue';

const showModal = ref(false);
const dialogRef = ref<(flag: boolean, data?: any) => void>();

const show = (): Promise<boolean> => {
  return new Promise((resolve) => {
    showModal.value = true;
    dialogRef.value = resolve;
  });
};
const hide = (flag: boolean, data?: any) => {
  showModal.value = false;
  if (data !== undefined) {
    dialogRef.value!(flag, data);
  } else {
    dialogRef.value!(flag);
  }
};

const choiModal = async () => {
  if (await show()) {
    console.log('ok');
  } else {
    console.log('no');
  }
};
</script>

<style scoped>
.pop-wrap {
  z-index: 5;
  border: 1px #ddd solid;
  border-radius: 4px;
  background: #fff;
  padding: 20px 20px;
  margin: 0 auto;
  box-shadow: 1px 1px 5px #ccc;
}
.pop-header {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.pop-footer {
  position: relative;
  text-align: center; /* padding: 0px 20px; */
  margin-top: 20px;
}
.pop-container {
  width: auto;
  margin: 20px 0px;
  position: relative;
}
</style>
