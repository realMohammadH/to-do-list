import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/index";
import { plugin, defaultConfig } from "@formkit/vue";
// !Components
import Container from "././components/layouts/Container.vue";
import 
const app = createApp(App);
app.component("container", Container);
app.use(router);
app.use(plugin, defaultConfig);
app.mount("#app");
