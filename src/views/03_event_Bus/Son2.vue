<template>
  <div id="bus-son2">
    <el-button type="primary" @click="handler">给兄弟送一个法拉利</el-button>
  </div>
</template>

<script setup>
import  $bus  from "../../bus/index";
import { ref } from "vue";

const car = ref({
  car: "法拉利",
});
const handler = () => {
  $bus.emit("car", car.value);
};
</script>

<style lang="scss">
#bus-son2 {
  width: 200px;
  height: 200px;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
