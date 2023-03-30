<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  
});
</script>

<template>
  <div class="wrapper" :style="{ width: props.width, height: props.height }">
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper {
  margin: auto;
}
</style>
