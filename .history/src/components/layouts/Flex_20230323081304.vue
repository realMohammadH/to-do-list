<script setup>
import { ref, defineProps } from "vue";

const props =ref()  defineProps({
  center: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="flex" :class="{center: props.}">
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
