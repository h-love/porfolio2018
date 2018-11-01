import Vue from 'vue';
import Router from 'vue-router';
import theHomePage from '@/components/views/theHomePage';
import theProjectPage from '@/components/views/theProjectPage';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
  if (from.name === 'theProjectPage' && savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(savedPosition);
      }, 500);
    });
  }

  if (from.name === 'theProjectPage' && to.hash) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ selector: to.hash });
      }, 500);
    });
  }

  if (from.name === 'theProjectPage' && to.name === 'theProjectPage') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 500);
    });
  }

  if (from.name === 'theHomePage' && to.name === 'theProjectPage') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 500);
    });
  }

  if (to.hash) {
    return { selector: to.hash };
  }

  return { x: 0, y: 0 };
};

export default new Router({
  mode: 'history',
  scrollBehavior,
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
