<script setup lang="ts">
import { ref, defineProps, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  myPath: {
    type: String,
  },
});
const logInSetup = ref(true);

onMounted(() => {
  if (props.myPath === "/login") {
    logInSetup.value = false;
    // actionButton.classList
  }
});

function goHome() {
  router.push("/app");
}
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

    <div class="form-group" v-show="logInSetup">
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
    <button type="submit" v-show="logInSetup">Register</button>
    <button type="submit" v-show="!logInSetup" @click="goHome()">Login</button>
    <h2 class="go-to-login" v-show="logInSetup">
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
  padding: 24px 20px 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 18px;
}

input[type="email"] + label,
input[type="password"] + label {
  position: absolute;
  top: 10px;
  left: 20px;
  color: #aaa;
  font-size: 12px;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
}

input[type="email"]:focus + label,
input[type="password"]:focus + label {
  /* top: 5px;
  left: 10px; */
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
  color: inherit;
}
</style>
