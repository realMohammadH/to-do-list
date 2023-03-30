<script setup>
import AddButton from "../ui/AddButton.vue";
</script>

<template>
  <flex class="add-sub-task">
    <button type="button" class="add-sub-task-btn">
      <flex alignItems="center" gap="5px"
        ><add-button></add-button>
        <p>Add sub-task</p></flex
      >
    </button>
  </flex>
</template>

<style scoped>
.add-sub-task-btn {
  padding: 5px 10px;
  border
}
.add-sub-task-btn:hover {
  background-color: #eee;
}
</style>
