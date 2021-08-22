import PageHome from "@/pages/PageHome.vue";
import PageAbout from "@/pages/PageAbout.vue";
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
  { path: "/:path(.*)", name: "notfound", component: PageNotFound },
];
