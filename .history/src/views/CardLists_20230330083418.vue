<script setup>
import { ref } from "vue";
import AddButton from "../components/ui/AddButton.vue";
const emptyStatImage = ref('../assets/images/empty-state.jpg')
</script>

<template>
  <article>
    <div class="header"></div>
    <div class="empty-state">
        <div class="image">
            <img :src="$renderImage(em)" alt="">
        </div>
        <div class="text"></div>
    </div>
    <flex> </flex>
  </article>
</template>

<style scoped>
.empty-state {
  position: relative;
  max-width: 360px;
  margin: auto;
  text-align: center;
  transition: opacity 0.17s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
