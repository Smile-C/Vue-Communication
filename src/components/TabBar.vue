<template>
  <div id="tabbar">
    <router-link to="/" class="link">
      <el-button type="primary">props</el-button>
    </router-link>
    <router-link to="/event" class="link">
      <el-button type="primary">Event</el-button>
    </router-link>
    <router-link to="/bus" class="link">
      <el-button type="primary">Event Bus</el-button>
    </router-link>

    <router-link to="/v-model" class="link">
      <el-button type="primary">v-model</el-button>
    </router-link>
    <router-link to="/useAttrs" class="link">
      <el-button type="primary">useAttrs</el-button>
    </router-link>
  </div>
</template>

<script setup></script>

<style lang="scss">
#tabbar {
}
</style>
