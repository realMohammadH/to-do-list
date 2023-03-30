<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import FormView from "../layouts/FormView.vue";

</script>

<template>
  <container>
    <flex>
      <wrapper width="454px">
        <form-view :myPath="pagePath"></form-view>
      </wrapper>
    </flex>
  </container>
</template>

<style scoped>
:deep(.flex) {
  height: 100%;
}
</style>
