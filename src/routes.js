import PageHome from "@/pages/PageHome.vue";
import PageAbout from "@/pages/PageAbout.vue";
import PageCalculator from "@/pages/PageCalculator.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", name: "home", component: PageHome, meta: { title: "Home" } },
  {
    path: "/about",
    name: "about",
    meta: { title: "About" },
    component: PageAbout,
  },
  {
    path: "/calculator",
    name: "calculator",
    meta: { title: "calculator" },
    component: PageCalculator,
  },
  { path: "/:path(.*)", name: "notfound", component: PageNotFound },
];
