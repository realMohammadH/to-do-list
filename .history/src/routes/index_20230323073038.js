import { createRouter, createWebHistory } from "vue-router";
import LogIn from "../components/views/LogIn.vue";
import SingUp from "../components/views/SingUp.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/login", name: "Login", component: LogIn }],
});
