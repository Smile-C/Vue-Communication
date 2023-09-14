<template>
  <div id="bus-father">
    This is Father
    <div class="busInfo">
      <Son1></Son1>
      <Son2></Son2>
    </div>
  </div>
</template>

<script setup>
import Son1 from "./Son1.vue";
import Son2 from "./Son2.vue";
</script>

<style lang="scss">
#bus-father {
  width: 500px;
  height: 500px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .busInfo {
    display: flex;
  }
}
</style>
