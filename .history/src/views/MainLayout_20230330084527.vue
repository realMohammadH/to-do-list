<script setup>
import AppNav from "../layouts/AppNav.vue";
</script>

<template>
  <flex class="main-wrapper" flow="column">
    <app-nav></app-nav>
    <wrapper width="100%">
      <router-view></router-view>
    </wrapper>
  </flex>
</template>

<style scoped>
:deep(.wrapper) {
  flex-grow: 1;
}
.main-wrapper{
  h
}
</style>
