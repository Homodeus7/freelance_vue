import { createRouter, createWebHistory } from "vue-router";
import ListTasks from "./views/ListTasks.vue";
import NewTask from "./views/NewTask.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ListTasks },
    { path: "/new", component: NewTask },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
