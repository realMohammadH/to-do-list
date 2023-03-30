<script setup>
import { reactive } from "vue";
</script>

<template>
  <div class="task-card">
    <div class="">
      <form action="" class="inputData">
        <input type="text" id="task-title" placeholder="Task name" />
        <textarea
          name="Description"
          id="task-description"
          cols="30"
          rows="10"
          placeholder="Description"
        ></textarea>
      </form>
    </div>
    <div class="actions">
      <button type="submit" class="submit-btn">Add task</button>
      <button type="button" class="cancel-btn">Cancel</button>
    </div>
  </div>
</template>

<style scoped>
:is(.inputData, .actions) {
}
.task-card {
  width: 550px;
  border-radius: 10px;
  position: absolute;
  top: 20%;
  left: 50%;
  translate: 50% 0;
  padding: 10px;
}
button {
  outline: none;
  border: none;
  border-radius: 8px;
}
</style>
