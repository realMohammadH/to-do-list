<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  center: {
    type: Boolean,
  },
  gap: {
    type: String,
  },
});
</script>

<template>
  <div class="flex" :class="{ center: props.center }" :style="{gap: pr}">
    <slot></slot>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
.center {
  align-items: center;
  justify-content: center;
}
</style>
