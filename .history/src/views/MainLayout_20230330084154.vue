<script setup>
import AppNav from "../layouts/AppNav.vue";
</script>

<template>
  <flex flow="column">
    <app-nav></app-nav>
    <wrapper></wrapper>
    <router-view></router-view>
  </flex>
</template>

<style scoped></style>
