import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from "../views/Dashboard";
import Register from "../views/Register";
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    meta: { requiresUnauth: true }
  },
  {
    path: '/home',
    component: Home,
    meta: { requiresUnauth: true }
  },
  {
    path: '/register',
    name: Register,
    component: Register,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/detail/:id',
    name: 'DetailList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailList.vue'),
  },

  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});


/*router.beforeEach(function(to, _, next) {
  to.meta.requiresAuth
  if (to.meta.requiresAuth && !store.getters.getterToken) {
    next('/');
  } else if (to.meta.requiresUnauth && store.getters.getterToken) {
    next('/dashboard');
  } else {
    next();
  }
});*/


export default router;
