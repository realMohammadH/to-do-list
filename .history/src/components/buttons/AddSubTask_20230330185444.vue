<script setup>
import AddButton from "../ui/AddButton.vue";
</script>

<template>
  <button type="button" class="add-sub-task-btn">
    <flex alignItems="center" gap="5px"
      ><add-button></add-button>
      <p>Add sub-task</p></flex
    >
  </button>
</template>

<style scoped>
.add-sub-task-btn {
  padding: 2px 10px;
  border-radius: 5px;
}
.add-sub-task-btn:hover {
  background-color: #eee;
}
</style>
