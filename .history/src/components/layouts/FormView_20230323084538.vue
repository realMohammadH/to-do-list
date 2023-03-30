<script setup></script>

<template>
  <form action="">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required />

    <label for="confirm-password">Confirm Password:</label>
    <input
      type="password"
      id="confirm-password"
      name="confirm-password"
      required
    />

    <button type="submit">Register</button>
  </form>
</template>

<style scoped></style>
