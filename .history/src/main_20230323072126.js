import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Router } from "vue-router";
const app = createApp(App);
app.use(route);
app.mount("#app");
