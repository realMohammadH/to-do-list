<script setup>
import { reactive } from "vue";
</script>

<template>
  <div class="task-card">
    <div class="formWrapper">
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
      <button type="button" class="cancel-btn">Cancel</button>
      <button type="submit" class="submit-btn">Add task</button>
    </div>
  </div>
</template>

<style scoped>
:is(.inputData, .actions) {
  display: flex;
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
  padding: 5px 10px;
  font-size: 17px;
}
.inputData {
  flex-direction: column;
}
.formWrapper {
  margin-block-end: 10px;
}
.actions {
  justify-content: end;
}
.submit-btn {
  color: #fff;
  background-color: #db4c3f;
}
</style>
