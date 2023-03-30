<script setup>
import AppNav from "../layouts/AppNav.vue";
</script>

<template>
  <flex>
    <app-nav ></app-nav>
    <container>
      <router-view></router-view>
    </container>
  </flex>
</template>

<style scoped></style>
