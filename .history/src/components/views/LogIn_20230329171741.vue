<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import FormView from "../layouts/FormView.vue";
const router = useRouter();

const showConfirm = ref(true);
onBeforeMount(async () => {
  showConfirm.value = route.path;
});
</script>

<template>
  <container>
    <flex>
      <wrapper width="454px">
        <form-view :my="showConfirm"></form-view>
      </wrapper>
    </flex>
  </container>
</template>

<style scoped>
:deep(.flex) {
  height: 100%;
}
</style>
