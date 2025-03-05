import { createRouter, createWebHistory } from 'vue-router';

import CatalogView from '../views/СatalogView.vue';
import ProductView from '../views/ProductView.vue';

import { routes } from '@/router/routes.ts';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.catalog,
      alias: routes.root,
      component: CatalogView,
    },
    {
      path: routes.catalog + routes.productId,
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: routes.basket,
      component: () => import('../views/BasketView.vue'),
    },
    { path: routes.notFound, redirect: routes.catalog },
  ],
  linkActiveClass: 'linkActive',
  linkExactActiveClass: 'linkExactActive',
});

export default router;
