import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/index";
import { plugin, defaultConfig } from "@formkit/vue";
// !Components
import Container from "././components/layouts/Container.vue";
import Wrapper from "./components/layouts/Wrapper.vue";
import Flex from "./components/layouts/Flex.vue";
const app = createApp(App);
app.component("flex", Flex);
app.component("container", Container);
app.component("wrapper", Wrapper);
app.use(router);
app.use(plugin, defaultConfig);
app.mount("#app");
