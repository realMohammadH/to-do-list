<script setup>
import FormView from "../layouts/FormView.vue";
</script>

<template>
  <container>
    <flex>
      <wrapper width="454px">
        <form-view></form-view>
      </wrapper>
    </flex>
  </container>
</template>

<style scoped>
:deep(.flex) {
  height: 100%;
}
</style>
