<template>
  <div class="modal-overlay">
    <!------- handler pop -------->
    <div class="pop-wrap">
      <div class="pop-header">
        <h1>Choi Modal</h1>
      </div>
      <div class="pop-container">
        <p class="pop-txt">Compile Success!<br />다음으로 이동하여 테스트를 진행하시겠습니까?</p>
      </div>
      <div class="pop-footer">
        <button class="lg-btn mint-btn" @click="$emit('ok')">OK</button>
        <button class="lg-btn mint-btn" @click="$emit('no')">NO</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
