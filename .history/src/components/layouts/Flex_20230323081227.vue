<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  center: {
    type: Boolean,
  },
});
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
.center {
    alig-
  justify-content: center;
}
</style>
