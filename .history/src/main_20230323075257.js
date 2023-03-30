import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/index";
import Container from "././components/layouts/Co"
const app = createApp(App);
app.use(router);
app.mount("#app");
