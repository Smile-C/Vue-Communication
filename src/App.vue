<template>
  <el-card class="box-card" id="main">
    <template #default>
      <TabBar></TabBar>
      <br />
      <router-view />
    </template>
  </el-card>
</template>
<script setup>
import TabBar from "./components/TabBar.vue";
</script>

<style lang="scss">
#main {
  display: flex;
  flex-direction: column;
  align-items: center;
  .link {
    margin: 10px 10px;
  }
}
</style>
