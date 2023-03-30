<script setup>
import { ref, defineProps } from "vue";
const props = def
</script>

<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper {
  margin: auto;
}
</style>
