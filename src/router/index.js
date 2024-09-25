// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import CustomerManagement from '../views/CustomerManagement.vue'
import CustomerStats from '../views/CustomerStats.vue'

const routes = [
  { path: '/', redirect: '/customers' },
  { path: '/customers', component: CustomerManagement },
  { path: '/stats', component: CustomerStats }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
