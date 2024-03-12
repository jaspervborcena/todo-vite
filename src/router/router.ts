import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import todoList from '../views/TodoList.vue'



export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/todoList',
      component: todoList,
    },
    {
      path: '/todoEntry',
      component: () => import('../views/TodoEntry.vue'),
    },
  ],
})
