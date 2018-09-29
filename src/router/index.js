import Vue from 'vue';
import Router from 'vue-router';
import theHomePage from '@/components/views/theHomePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'theHomePage',
      component: theHomePage,
    },
  ],
});
