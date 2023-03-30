import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./../views/views/LogIn.vue";
import SingUp from "./../views/views/SingUp.vue";
import MainLayout from "../components/views/MainLayout.vue";
import Analysis from "./../views/Analysis.vue";
import CardList from "./../views/CardLists.vue";

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
        { path: "/tasks", name: "Tasks", component: CardList },
        { path: "/analysis", name: "Analysis", component: Analysis },
      ],
    },
  ],
});

export default router;
