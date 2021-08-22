import PageHome from "@/pages/PageHome.vue";
import PageAbout from "@/pages/PageAbout.vue";
import PageNotFound from "@/pages/PageNotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: PageHome, meta: { title: "Home" } },
  {
    path: "/about",
    meta: { title: "About" },
    component: PageAbout,
  },
  { path: "/:path(.*)", component: PageNotFound },
];
