// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import VueScrollTo from 'vue-scrollto';
import App from './App';
import router from './router';
import store from './store';

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.preload) && from.name !== 'theProjectPage' && from.name !== to.name && from.name === null) {
    store.dispatch('beginPreload');
    next();
  } else {
    store.dispatch('endPreload');
    next();
  }
});

Vue.config.productionTip = false;

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
