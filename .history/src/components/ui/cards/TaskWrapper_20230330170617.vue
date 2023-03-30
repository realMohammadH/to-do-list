<script setup>
import { reactive } from "vue";
</script>

<template>
  <flex alignItems="center" class="task-wrapper">
    <input type="checkbox" id="scales" name="scales" checked />
    <div class="taskInfo">
      <h3 class="task-title"></h3>
      <p class="task-description"></p>
    </div>
  </flex>
</template>

<style scoped>
.task-wrapper {
  width: 100%;
  pad
}
</style>
