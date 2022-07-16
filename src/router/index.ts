import { createRouter, createWebHistory } from 'vue-router'
import OtherRoutes from './OtherRoutes'
import LandingRoutes from './LandingRoutes'
import AuthRoutes from './AuthRoutes'
import AdminRoutes from './AdminRoutes'

const routes: Array<any> = [];

routes.push(
  ...OtherRoutes,
  ...LandingRoutes,
  ...AuthRoutes,
  ...AdminRoutes
);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;