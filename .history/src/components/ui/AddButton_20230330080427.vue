<script setup>
import { ref } from "vue";

function openAddTask() {}
</script>

<template>
  <button class="add-btn" type="button" @click="openAddTask()">
    <svg
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M6 12H18"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M12 18V6"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  </button>
</template>

<style scoped>
.add-btn {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  padding: 5px;
}
.add-btn:hover {
  background-color: #ffffff33;
}
</style>
