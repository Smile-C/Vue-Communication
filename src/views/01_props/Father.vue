<template>
  <div id="prop-father">
    <span>This is Father</span>
    <br />
    <input type="text" v-model="fatherName" />
    <br />
    <input type="text" v-model="fatherAge" />
    <br />
    <Son :name="fatherName" :age="fatherAge"></Son>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Son from "./Son.vue";
const fatherName = ref("Smile_C");
const fatherAge = ref(20);
</script>

<style lang="scss" scoped>
#prop-father {
  width: 500px;
  height: 500px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
