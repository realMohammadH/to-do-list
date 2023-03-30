<script setup>
import { reactive, ref } from "vue";

const taskData = reactive({
  taskTitle: null,
  taskDescription: null,
  taskEndDate: null,
});

function addTask() {}

function close() {
  
}
</script>

<template>
  <div class="main-card-parent">
    <div class="overlay"></div>
    <div class="task-card">
      <div class="formWrapper">
        <form class="inputData" @submit.prevent>
          <input
            type="text"
            id="task-title"
            placeholder="Task name"
            v-model="taskData.taskTitle"
          />
          <textarea
            name="Description"
            id="task-description"
            rows="10"
            placeholder="Description"
            v-model="taskData.taskDescription"
          ></textarea>
          <input
            type="date"
            id="pickDate"
            name="trip-start"
            min="2023-01-01"
            max="2050-12-31"
            v-model="taskData.taskEndDate"
          />
        </form>
      </div>
      <div class="actions">
        <button type="button" class="cancel-btn">Cancel</button>
        <button type="submit" class="submit-btn">Add task</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
:is(.inputData, .actions) {
  display: flex;
  padding: 10px;
}
:is(input, textarea) {
  border: none;
  outline: none;
  padding: 5px 8px;
}
.main-card-parent {
  width: 100%;
  height: 100%;
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
input[type="text"] {
  font-size: 18px;
}
input[type="text"]::placeholder {
  font-weight: 500;
  font-size: 18px;
  color: #00000066;
}
textarea {
  width: 100%;
  resize: none;
  font-size: 15px;
  line-height: 1.2;
  height: 60px;
}
textarea::placeholder {
  color: #00000066;
}
input[type="date"] {
  font-size: 15px;
  width: fit-content;
  background-color: #00000008;
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
