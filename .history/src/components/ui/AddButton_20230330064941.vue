<script setup>
import { ref } from "vue";

function openAddTask() {}
</script>

<template>
  <button class="add-btn" @click="openAddTask()">
    <svg
      viewBox="0 0 1024 1024"
      fill="#ffffff"
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M35.2 539.2C20 539.2 8 527.2 8 512s12-27.2 27.2-27.2h954.4c15.2 0 27.2 12 27.2 27.2s-12 27.2-27.2 27.2H35.2z"
          fill=""
        ></path>
        <path
          d="M512 1016c-15.2 0-27.2-12-27.2-27.2V35.2C484.8 20 496.8 8 512 8s27.2 12 27.2 27.2v954.4c0 14.4-12 26.4-27.2 26.4z"
          fill=""
        ></path>
      </g>
    </svg>
  </button>
</template>

<style scoped>
.add-btn {
  width: 25px;
  height: 25px;
  border-radius: 5px;
  padding: 5px;
}
.add-btn:hover {
  background-color: #ffffff33;
}
</style>
