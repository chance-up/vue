<template>
  <Modal v-if="showModal" @no="modalNo()" @ok="modalOk()" />
  <button @click="parkModal()">Show Modal</button>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import Modal from './Modal.vue';
export interface OnModalEvent {
  onOk(): void;
  onCancel(): void;
}
export interface IModal {
  show: (message: string, onModalEvent?: OnModalEvent) => void;
  hide: () => void;
}
export type ModalFunction = () => IModal;

const showModal = ref(false);
const modalMessage = ref('');
let modalEvent: OnModalEvent | null = null;

const modalNo = () => {
  showModal.value = false;
  modalEvent?.onCancel();
};
const modalOk = () => {
  showModal.value = false;
  modalEvent?.onOk();
};

const updateModal: ModalFunction = function () {
  return {
    show: function (message: string, onModalEvent?: OnModalEvent): void {
      showModal.value = true;
      modalMessage.value = message;
      if (onModalEvent != null) {
        modalEvent = onModalEvent;
      }
    },
    hide: function (): void {
      showModal.value = false;
    },
  };
};

const parkModal = () => {
  updateModal().show('Park Modal', {
    onOk: () => {
      console.log('ok');
    },
    onCancel: () => {
      console.log('no');
    },
  });
};
</script>
