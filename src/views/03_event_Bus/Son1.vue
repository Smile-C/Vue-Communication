<template>
  <div id="bus-son1">
    <span>{{ car.car }}</span>
  </div>
</template>

<script setup>
import $bus from "../../bus";
import { onMounted, ref } from "vue";

const car = ref({});
onMounted(() => {
  $bus.on("car", (value) => {
    car.value = value;
  });
});
</script>

<style lang="scss">
#bus-son1 {
  width: 200px;
  height: 200px;
  border: 2px solid skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
