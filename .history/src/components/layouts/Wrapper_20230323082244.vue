<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  width: {
    type: String,
  },
  hieght: {
    type: String,
  },
});
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
