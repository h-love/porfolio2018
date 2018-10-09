import Vue from 'vue';
import Router from 'vue-router';
import theHomePage from '@/components/views/theHomePage';
import theProjectPage from '@/components/views/theProjectPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'theHomePage',
      component: theHomePage,
    },
    {
      path: '/project/:id',
      name: 'theProjectPage',
      component: theProjectPage,
    },
  ],
});
