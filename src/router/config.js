import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "*",
    component: PageNotFound,
  },
]