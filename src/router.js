import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import PeliculasPage from "./pages/PeliculasPage.vue";
import FormulariosPage from "./pages/FormulariosPage.vue";
import HelloWorld from "./components/HelloWorld.vue";

export const routes = [
  { path: "/home", component: HomePage },
  { path: "/peliculas", component: PeliculasPage },
  // { path: "/error", component: ErrorPage },
  { path: "/hello", component: HelloWorld },
  { path: "/hello/:id", component: HelloWorld },
  { path: "", component: HomePage },
  { path: "/formularios", component: FormulariosPage },
  { path: "/:pathMatch(.*)*", component: ErrorPage },
];


export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});