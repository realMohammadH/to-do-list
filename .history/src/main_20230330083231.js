import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/index";
import { plugin, defaultConfig } from "@formkit/vue";
//! plugins
// !Components
import Container from "./layouts/Container.vue";
import Wrapper from "./layouts/Wrapper.vue";
import Flex from "./layouts/Flex.vue";
const app = createApp(App);
app.component("flex", Flex);
app.component("container", Container);
app.component("wrapper", Wrapper);
app.use(renderImage);
app.use(router);
app.use(plugin, defaultConfig);
app.mount("#app");
