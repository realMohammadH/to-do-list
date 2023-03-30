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
  <div class="wrapper" :styl>
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper {
  margin: auto;
}
</style>
