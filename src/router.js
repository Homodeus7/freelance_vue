import { createRouter, createWebHistory } from 'vue-router'
import ListTasks from './views/ListTasks.vue'
import NewTask from './views/NewTask.vue'
import OneTask from './views/OneTask.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ListTasks },
    { path: '/new', component: NewTask },
    { path: '/task/:id?', props: true, component: OneTask },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})
