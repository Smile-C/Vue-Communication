<template>
  <div id="model-son">
    儿子的钱:{{ moneys }}
    <el-button type="success" @click="handler">给父亲打钱</el-button>
  </div>
</template>

<script setup>
const props = defineProps(["moneys"]);
const emits = defineEmits(["toFather"]);

const handler = () => {
  emits("toFather", props.moneys + 1000);
};
</script>

<style lang="scss">
#model-son {
  width: 200px;
  height: 200px;
  border: 2px solid purple;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
}
</style>
