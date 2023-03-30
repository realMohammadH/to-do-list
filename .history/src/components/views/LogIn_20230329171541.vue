<script setup>
import { ref,onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import FormView from "../layouts/FormView.vue";
const router = useRouter();

const showConfirm = ref(true);

console.log(router);
const route = useRoute();
console.log(route.path);
console.log(router.options.routes);

onBeforeMount(
  async
)
</script>

<template>
  <container>
    <flex>
      <wrapper width="454px">
        <form-view :isLogging="showConfirm"></form-view>
      </wrapper>
    </flex>
  </container>
</template>

<style scoped>
:deep(.flex) {
  height: 100%;
}
</style>
