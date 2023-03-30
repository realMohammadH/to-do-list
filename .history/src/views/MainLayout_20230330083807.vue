<script setup>
import AppNav from "../layouts/AppNav.vue";
</script>

<template>
  <flex flow="column">
    <app-nav></app-nav>

      <router-view></router-view>
    </container>
  </flex>
</template>

<style scoped></style>
