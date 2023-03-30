<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import FormView from "../layouts/FormView.vue";

const router = useRouter();
console.log(router);
const route = useRoute();
console.log(route);
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
