import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home/home.vue';
import Login from '../views/Login/login.vue';
import Address from '../views/address/address.vue';

Vue.use(VueRouter);

import { getToken } from '@/utils/auth';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/cart.vue'),
  },
  {
    path: '/classify',
    name: 'classify',
    component: () => import('../views/classify/classify.vue'),
  },
  {
    path: '/Login',
    name: 'login',
    component: Login,
  },
  {
    path: '/Address',
    name: 'address',
    component: Address,
  },
  {
    path: '/addGL',
    name: 'addGL',
    component: () => import('../views/mine/userMsg/guanlidizhi.vue'),
  },
  {
    path: '/myOrder',
    name: 'myorder',
    component: () => import('../views/Myorder/myOrder.vue'),
    meta: {
      needLogIn: true,
    },
  },
  {
    path: '/discover',
    name: 'discover',
    component: () => import('../views/discover/discover.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'DiscoverRecommend',
        component: () => import('../views/discover/index.vue'),
      },
    ],
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine/mine.vue'),
  },
  {
    path: '/userMsg',
    name: 'userMsg',
    component: () => import('../views/mine/userMsg/index.vue'),
    meta: {
      needLogIn: true,
    },
  },
  {
    path: '/particulars',
    name: 'particulars',
    component: () => import('../views/cart/particulars.vue'),
  },
  {
    path: '/calculate',
    name: 'calculate',
    component: () => import('../views/cart/calculate.vue'),
  },
  {
    path: '/OrderForm',
    name: 'OrderForm',
    component: () => import('../views/cart/OrderForm.vue'),
  },
  {
    path: '/shouhou',
    name: 'shouhou',
    component: () => import('../views/mine/shouhou.vue'),
  },
  {
    path: '/youhui',
    name: 'youhui',
    component: () => import('../views/mine/youhui.vue'),
  },
  {
    path: '/limine',
    name: 'limine',
    component: () => import('../views/mine/li-mine.vue'),
  },
  {
    path: '/calculate',
    name: 'calculate',
    component: () => import('../views/cart/calculate.vue'),
  },
  {
    path: '/userMsg',
    name: 'userMsg',
    component: () => import('../views/mine/userMsg/index.vue'),
  },
  {
    path: '/guanlidizhi',
    name: 'guanlidizhi',
    component: () => import('../views/mine/userMsg/guanlidizhi.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/home/components/search.vue'),
  },
  {
    path: '/hotClassify',
    name: 'hotClassify',
    component: () => import('../views/home/components/hotClassify.vue'),
  },
];

const router = new VueRouter({
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.needLogIn) {
    if (getToken('token')) {
      next();
    } else {
      next({
        name: 'login',
      });
    }
  } else {
    next();
  }
});

export default router;
