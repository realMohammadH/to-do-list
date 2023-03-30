import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/index";
// !
import Container from "././components/layouts/Container.vue";

const app = createApp(App);
app.component(Container, "container");
app.use(router);
app.mount("#app");
