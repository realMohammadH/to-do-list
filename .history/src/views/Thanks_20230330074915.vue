<script setup></script>

<template>
  <section class="thanks-page">
    <wrapper width="780px" padding="20px">
      <h2 class="thank-page-text">
        Hello, you did it. Thank you for joining our family. Are you ready to
        get things done? Great come on let's start accomplishing the important
        thing and let us waste time.
        <router-link class="go-to-home" to="/app">Go To Your Home Page</router-link>
      </h2>
    </wrapper>
  </section>
</template>

<style scoped>
.thanks-page {
  height: 100%;
}
.thank-page-text {
  font-size: 2rem;
  line-height: 1.2;
}
:deep(.wrapper) {
  position: absolute;
  top: 20%;
  left: 50%;
  translate: -50% 0;
}
.go-to-home{
    color: ;
}
</style>
