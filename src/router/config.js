import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import Landing from '../pages/Landing';

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/hook',
    component: Landing
  },
  {
    path: '*',
    component: PageNotFound
  }
];
