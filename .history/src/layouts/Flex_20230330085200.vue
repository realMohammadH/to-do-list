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
    type: String,
  },
  alignI
});
</script>

<template>
  <div
    class="flex"
    :class="{ center: props.center }"
    :style="{ gap: props.gap, flexDirection: props.flow }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: center;
}
.center {
  align-items: center;
  justify-content: center;
}
</style>
