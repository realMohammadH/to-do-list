<script setup>
import AddButton from "../ui/AddButton.vue";
</script>

<template>
  <flex class="add-sub-task">
    <button type="button">
      <flex alignItems="center" gap="5px"
        ><add-button></add-button>
        <p>Add sub-task</p></flex
      >
    </button>
  </flex>
</template>

<style scoped>
:deep(.add-btn)
</style>
