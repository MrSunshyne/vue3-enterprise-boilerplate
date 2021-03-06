import { createApp } from "vue";
import "./css/tailwind.css";
import "./css/transitions.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import store from "./store/index.js";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(store);
app.use(router);
app.mount("#app");
