import express from 'express';

import Auth from './auth';
import Users from './users';

const router = express.Router();

const routes = [
  {
    path: '/auth',
    route: Auth,
  },
  {
    path: '/users',
    route: Users,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
