<template>
  <div id="model-son2">
    <div>
      {{ username
      }}<el-button type="primary" @click="changeUsername">点击修改</el-button>
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <div>
      {{ password
      }}<el-button type="primary" @click="changePassword">点击修改</el-button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["username", "password"]);
const emits = defineEmits(["update:username", "update:password"]);

const changeUsername = () => {
  emits("update:username", "JackMa");
};
const changePassword = () => {
  emits("update:password", "HAHAHAHA");
};
</script>

<style lang="scss">
#model-son2 {
  width: 200px;
  height: 200px;
  border: 2px solid red;
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
