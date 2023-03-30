<script setup>
import AppNav from "../layouts/AppNav.vue";
</script>

<template>
  <flex flow="column">
    <app-nav></app-nav>
    <wrapper width="100%">
      <router-view></router-view>
    </wrapper>
  </flex>
</template>

<style scoped>
:deep(.w){

}
</style>
