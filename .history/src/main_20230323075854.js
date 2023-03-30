import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/index";
import { plugin, defaultConfig } from "@formkit/vue";
// !Components
import ContainerWrapper from "././components/layouts/ContainerWrapper.vue";

const app = createApp(App);
app.component(ContainerWrapper, "Container-Wrapper");
app.use(router);
app.use(plugin, defaultConfig);
app.mount("#app");
