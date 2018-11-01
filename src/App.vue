<template>
  <div id="app">
    <transition :name="this.transitionName" mode="out-in">
      <router-view v-if="$route.name === 'theProjectPage'" :key="$route.fullPath"></router-view>
      <router-view v-else></router-view>
    </transition>
  </div>
</template>

<script>
import EventBus from '@/assets/js/bus';

export default {
  name: 'App',
  data() {
    return {
      isNext: false,
      transitionName: 'slide-from-right',
    };
  },
  mounted() {
    EventBus.$on('is-next', (value) => {
      this.isNext = value;
    });
  },
  watch: {
    '$route'(to, from) { // eslint-disable-line object-shorthand
      if (from.name === 'theProjectPage' && to.name === 'theProjectPage') {
        if (this.isNext) {
          this.transitionName = 'slide-from-down';
        } else {
          this.transitionName = 'slide-from-up';
        }
      } else {
        this.transitionName = from.name === 'theHomePage' ? 'slide-from-left' : 'slide-from-right';
      }
    },
  },
};
</script>

<style lang="sass">
  @import "./assets/sass/main.sass"
</style>
