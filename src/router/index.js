import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/pages/Layout';
import Index from '@/pages/Index';
import Error404 from '@/pages/Error404';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'Loading',
      children: [
        {
          path: '',
          name: 'Index',
          component: Index,
        },
      ],
    },
    {
      path: '*',
      component: Error404,
      name: 'Error404'
    },
  ],
});
