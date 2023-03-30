<script setup>
import { ref } from "vue";
import AddButton from "../components/ui/AddButton.vue";
const emptyStatImage = ref("../assets/images/empty-state.jpg");
</script>

<template>
  <article class="tasks-list">
    <container>
      <flex flow="column">
        <flex class="header" gap="5px" alignItems="center">
          <add-button color="#d1453b"></add-button>
          <p>Add task</p>
        </flex>
        <div class="empty-state">
          <div class="image">
            <img :src="$renderImage(emptyStatImage)" alt="" />
          </div>
          <div class="text">
            
          </div>
        </div>
        <flex> </flex>
      </flex>
    </container>
  </article>
</template>

<style scoped>
.tasks-list {
  height: 100%;
  padding: 20px 0;
}
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
