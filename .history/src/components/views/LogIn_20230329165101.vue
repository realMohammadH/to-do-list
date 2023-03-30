<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import FormView from "../layouts/FormView.vue";
const router = useRouter();
console.log(router);
const r = useRouter();
console.log(location.fullPath);

// console.log(this.$router.options.routes);
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
