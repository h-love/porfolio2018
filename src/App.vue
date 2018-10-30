<template>
  <div id="app">
    <transition :name="this.transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-from-right',
    };
  },
  watch: {
    '$route'(to, from) { // eslint-disable-line object-shorthand
      if (from.name === 'theProjectPage' && to.name === 'theProjectPage') {
        this.transitionName = 'slide-from-left'
        return;
      }
      this.transitionName = from.name === 'theHomePage' ? 'slide-from-left' : 'slide-from-right';
    },
  },
};
</script>

<style lang="sass">
  @import "./assets/sass/main.sass"
</style>
