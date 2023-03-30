<script setup>
import { reactive } from "vue";
</script>

<template>
  <div class="overlay"></div>
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
  padding: 10px;
}
.task-card {
  width: 550px;
  border-radius: 10px;
  position: absolute;
  top: 20%;
  left: 50%;
  translate: -50% 0;
  background-color: #fff;
}
.overlay {
  position: absolute;
  inset: 0;
  background-color: #00000080;
}
button {
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 17px;
  cursor: pointer;
}
.inputData {
  flex-direction: column;
}
.formWrapper {
  margin-block-end: 10px;
}
input[type='text']::placeholder{
  \
}
.actions {
  justify-content: end;
  gap: 5px;
  border-top: 1px solid #eee;
}
.submit-btn {
  color: #fff;
  background-color: #db4c3f;
}
.submit-btn:hover {
  background-color: #ca3f32;
}
.cancel-btn {
  color: #000;
  background-color: #f5f5f5;
}
.cancel-btn:hover {
  background-color: #dadada;
}
</style>
