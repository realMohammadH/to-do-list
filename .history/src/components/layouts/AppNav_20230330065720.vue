<script setup>
import { ref } from "vue";
import AddButton from "../ui/AddButton.vue";
import 
</script>

<template>
  <header>
    <nav>
      <ul class="nav-bar">
        <add-button></add-button>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #db4c3f;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
nav {
  padding: 10px 20px;
}
.nav-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
