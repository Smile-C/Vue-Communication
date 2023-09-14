<template>
  <div id="v-model-Father">
    This is Father
    <div class="fatherInfo">
      <div class="money">资产</div>
      <el-input v-model="money" placeholder="Please input" />
    </div>
    <div>{{ username }},{{ password }}</div>
    <h2>{{ money }}</h2>
    <div class="info">
      <Son1 :moneys="money" @toFather="handler"></Son1>
      <Son2 v-model:username="username" v-model:password="password"></Son2>
    </div>
  </div>
</template>
<script setup>
import Son1 from "./Son1.vue";
import Son2 from "./Son2.vue";
import { ref } from "vue";

const money = ref(10000);
const username = ref("Smile_C");
const password = ref("dadada");

const handler = (value) => {
  money.value = value;
};
</script>

<style lang="scss">
#v-model-Father {
  width: 500px;
  height: 500px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .fatherInfo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info {
    display: flex;
  }
}
</style>
