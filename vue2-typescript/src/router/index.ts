import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/main/MainPage.vue'),
    children: [
      {
        path: '/directives',
        name: 'directives',
        component: () => import('@/pages/main/directive/DirectiveSamplePage.vue'),
      },
      {
        path: '/decorators',
        name: 'decorators',
        component: () => import('@/pages/main/property-decorator/DecoratorSamplePage.vue'),
      },
    ],
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
