import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { appAxios } from "@/utils/appAxios";
import store from "./store";

import "@/assets/style.css";

import appHeader from "@/components/Shared/appHeader.vue";
import appBookmarkList from "@/components/Shared/appBookmarkList/index.vue";

const app = createApp(App);
app.component("appHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
