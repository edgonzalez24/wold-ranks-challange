import { createWebHistory, createRouter } from 'vue-router';
import Home from './pages/Home.vue';
import DetailPage from './pages/[id].vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/:id',
      component: DetailPage,
    },
  ],
});

export default router;