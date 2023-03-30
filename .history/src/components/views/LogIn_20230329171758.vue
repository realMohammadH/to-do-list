<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import FormView from "../layouts/FormView.vue";
const router = useRouter();

const pagePath = ref("");
onBeforeMount(async () => {
  showConfirm.value = route.path;
});
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
