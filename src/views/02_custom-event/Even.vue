<template>
  <div id="even-father">
    <div class="fatherInfo">
      <span v-for="item in list" :key="item">{{ item }}</span>
    </div>
    <div class="even-info">
      <Even1 @eventMessage="handler"></Even1>
      <Even2></Even2>
    </div>
  </div>
</template>

<script setup>
import Even1 from "./Even1.vue";
import Even2 from "./Even2.vue";
import { ref } from "vue";
const list = ref([]);
/**
 * 原生事件
 */
const handler = (...args) => {
  list.value = args;
};
</script>

<style lang="scss">
#even-father {
  width: 500px;
  height: 500px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .even-info {
    display: flex;
    margin: 10px;
    padding: 10px;
  }
}
</style>
