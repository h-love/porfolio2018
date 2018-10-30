<template>
  <div class="p-navMain">
    <div class="p-navMain__bkg" ref="navMain"></div>
    <div class="p-navMain__content grid-container flex-container align-justify align-middle">
      <div>
        <router-link
          class="p-navMain__content__brand js-navItem"
          :class="{ active: !project }"
          data-id="top"
          :to="project ? '/#top':'#top'">henri.love</router-link>
      </div>
      <div>
        <router-link
          class="p-navMain__content__item js-navItem"
          v-for="item in nav"
          :data-id="item.id"
          :key="item.id"
          :to="item.link">{{item.text}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '@/assets/js/utils';

export default {
  name: 'NavMain',
  props: {
    project: Boolean,
  },
  data() {
    return {
      nav: [
        {
          id: 'projects',
          text: '/projects',
          link: '/#projects',
        },
        {
          id: 'about',
          text: '/about',
          link: '/#about',
        },
        {
          id: 'contact',
          text: '/contact',
          link: '/#contact',
        },
      ],
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, false);
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      const nav = this.$refs.navMain;
      const navItems = document.getElementsByClassName('js-navItem');
      if (this.project) {
        if (scrollY) {
          nav.classList.add('active');
        } else {
          nav.classList.remove('active');
        }
      } else {
        for (let i = 0; i < navItems.length; i += 1) {
          const element = document.getElementById(navItems[i].getAttribute('data-id'));
          const top = utils.offset(element).top;
          const scroll = scrollY + nav.offsetHeight;
          if (top <= scroll && top + element.offsetHeight > scroll) {
            if (i) {
              nav.classList.add('active');
            } else {
              nav.classList.remove('active');
            }
            navItems[i].classList.add('active');
          } else {
            navItems[i].classList.remove('active');
          }
        }
      }
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, false);
  },
};
</script>
