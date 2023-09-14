<template>
  <div id="prop-son">
    <p>This is Son</p>
    <hr />
    <span>{{ name }}</span>
    <br />
    <span>{{ age }}</span>
  </div>
</template>

<script setup>
const props = defineProps(["name", "age"]);
</script>

<style lang="scss" scoped>
#prop-son {
  width: 300px;
  height: 300px;
  border: 2px solid green;
  color: green;
}
</style>
