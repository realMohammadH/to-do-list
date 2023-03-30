<script setup>
import { ref, defineProps } from "vue";
</script>

<template>
  <div class="flex">
    <slot></slot>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
</style>
