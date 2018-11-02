import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isPreloading: false,
};

const mutations = {
  beginPreload() {
    document.body.classList.add('u-noScroll');
    state.isPreloading = true;
  },
  endPreload() {
    setTimeout(() => {
      document.body.classList.remove('u-noScroll');
      state.isPreloading = false;
    }, 1000);
  },
};

const actions = {
  beginPreload: ({ commit }) => commit('beginPreload'),
  endPreload: ({ commit }) => commit('endPreload'),
};

const getters = {
  isPreloading: () => state.isPreloading,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
