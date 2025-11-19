

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/LoginView.vue';
import ProductsView from '../views/ProductsView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

