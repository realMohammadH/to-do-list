<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  center: {
    type: Boolean,
  },
  gap: {
    type: String,
  },
  flow: {
    
  }
});
</script>

<template>
  <div
    class="flex"
    :class="{ center: props.center }"
    :style="{ gap: props.gap }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  height: 100%;
}
.center {
  align-items: center;
  justify-content: center;
}
</style>
