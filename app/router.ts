import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.post('/api/auth/login', 'auth.login');
  router.post('/api/auth/register', 'auth.register');

  router.resources('users', '/api/users', controller.user);
};
