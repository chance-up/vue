<template>
  <div></div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const refText = ref('this is exText');
const reacriveText = reactive({
  exText: refText,
});
</script>

<style scoped></style>
