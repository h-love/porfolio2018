<template>
  <div id="app">
    <preloader></preloader>
    <transition :name="this.transitionName" mode="out-in">
      <router-view v-if="$route.name === 'theProjectPage'" :key="$route.fullPath"></router-view>
      <router-view v-else></router-view>
    </transition>
  </div>
</template>

<script>
import EventBus from '@/assets/js/bus';
import json from '@/assets/data/projects.json';
import Preloader from '@/components/modules/preloader/Preloader';

export default {
  name: 'App',
  components: {
    Preloader,
  },
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
    for (let i = 0; i < json.projects.length; i += 1) {
      for (let j = 0; j < json.projects[i].pictures.length; j += 1) {
        const img = new Image();
        img.src = json.projects[i].pictures[j].src;
      }

      const header = new Image();
      header.src = json.projects[i].headerImg;

      if (window.innerWidth < 650) {
        const poster = new Image();
        poster.src = json.projects[i].video_poster;
      } else {
        const req = new XMLHttpRequest();
        req.open('GET', json.projects[i].video, true);
        req.responseType = 'blob';
        req.send();
      }

      const profile = new Image();
      profile.src = '/static/overflowhidden.jpg';
      const transition = new Image();
      transition.src = '/static/transition.gif';
      transition.onload = () => {
        this.$nextTick(() => {
          this.$store.dispatch('endPreload');
        });
      };
    }
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
