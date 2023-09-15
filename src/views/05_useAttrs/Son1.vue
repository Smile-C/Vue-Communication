<template>
  <div id="useAttr-son1">
    <el-button :="$attrs">我是Son</el-button>
  </div>
</template>

<script setup>
import { useAttrs } from "vue";
// const props = defineProps(["type", "sonname"]);
let $attrs = useAttrs();
console.log($attrs);
</script>

<style lang="scss">
#useAttr-son1 {
  width: 200px;
  height: 200px;
  border: 2px solid springgreen;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
