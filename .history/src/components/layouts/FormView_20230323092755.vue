<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const confirmPassword = ref(null);
const showConfirm = ref(true);
const location = useRoute();
console.log(location.fullPath);
if (location.path == "/login") {
  console.log(true);
  showConfirm.value = false;
}

const email = ref("");
const password = ref("");
const confirmPasswordInput = ref("");
const isPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);

function togglePassword() {
  isPasswordVisible.value = !isPasswordVisible.value;
}

function toggleConfirmPassword() {
  isConfirmPasswordVisible.value = !isConfirmPasswordVisible.value;
}

function register() {
  // your registration logic here
}
/*
function togglePassword() {
  var passwordInput = document.getElementById("password");
  var toggleButton = document.querySelector("#password + .toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Show";
  }
}

function toggleConfirmPassword() {
  var confirmPasswordInput = document.getElementById("confirm-password");
  var toggleButton = document.querySelector(
    "#confirm-password + .toggle-password"
  );

  if (confirmPasswordInput.type === "password") {
    confirmPasswordInput.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    confirmPasswordInput.type = "password";
    toggleButton.textContent = "Show";
  }
}
*/
</script>

<template>
  <form action="">
    <div class="form-group">
      <input type="email" id="email" name="email" required v-model="email" />
      <label for="email">Email</label>
    </div>

    <div class="form-group">
      <input
        type="password"
        id="password"
        name="password"
        required
        v-model="password"
      />
      <label for="password">Password</label>
    </div>

    <div class="form-group" v-show="showConfirm">
      <input
        type="password"
        id="confirm-password"
        name="confirm-password"
        required
      />
      <label for="confirm-password" ref="confirmPassword"
        >Confirm Password</label
      >
    </div>
    <button type="submit">Register</button>
    <h2 class="go-to-login" v-show="showConfirm">
      Already signed up
      <router-link to="/login">? Go to login</router-link>
    </h2>
  </form>
</template>

<style scoped>
form {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
}
form > * + * {
  margin-block-start: 1.5rem;
}
.form-group {
  position: relative;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 17px 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 18px;
}

input[type="email"] + label,
input[type="password"] + label {
  position: absolute;
  top: 12px;
  left: 20px;
  color: #aaa;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
}

input[type="email"]:focus + label,
input[type="password"]:focus + label {
  top: 5px;
  left: 10px;
  font-size: 12px;
  color: #62cdff;
}
input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #62cdff;
  outline: none;
}
button[type="submit"] {
  width: 100%;
  background-color: #db4c3f;
  color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 22px;
  font-weight: 500;
}

button[type="submit"]:hover {
  background-color: #cf3f31;
}
.go-to-login {
  border-top: 0.5px solid #cacaca;
  font-size: 13px;
  color: #000000e0;
  padding: 10px;
  text-align: center;
}
.go-to-login a {
  text-decoration: none;
}
</style>
