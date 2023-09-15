<template>
  <div id="useAttrs-father">
    This is Father
    <el-button >加油</el-button>
    <Son1 type="primary"></Son1>
  </div>
</template>

<script setup>
import Son1 from "./Son1.vue";
</script>

<style lang="scss">
#useAttrs-father {
  width: 500px;
  height: 500px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
