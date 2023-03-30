import { createRouter, createWebHistory } from "vue-router";
import LogIn from "../components/views/LogIn.vue";
import SingUp from "../components/views/SingUp.vue";
import MainLayout from "../components/views/MainLayout.vue";
import Analysis from /views";
import CardList from "./../components"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "SingUp", component: SingUp, props: true },
    { path: "/login", name: "Login", component: LogIn, props: true },
    {
      path: "/app",
      name: "App",
      component: MainLayout,
      props: true,
      children: [
        {path:'/tasks',component:}
      ],
    },
  ],
});

export default router;
