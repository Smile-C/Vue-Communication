<template>
  <div id="even-son1">
    <el-button type="primary" plain @click="sendMessage">发送事件</el-button>
  </div>
</template>

<script setup>
const $emit = defineEmits(["eventMessage"]);
const sendMessage = () => {
  // 第一个参数是事件名称，后面的参数是注入的参数
  $emit("eventMessage", 1, 2, 3, 4, 5);
};
</script>

<style lang="scss" scoped>
#even-son1 {
  width: 200px;
  height: 200px;
  border: 2px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
