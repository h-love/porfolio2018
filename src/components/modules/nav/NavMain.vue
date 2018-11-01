<template>
  <div class="p-navMain">
    <div class="p-navMain__bkg" ref="navMain"></div>
    <div class="p-navMain__content grid-container flex-container align-justify align-middle">
      <div>
        <router-link
          v-scroll-to="{el: '#top'}"
          class="p-navMain__content__brand js-navItem"
          :class="{ active: !project }"
          data-id="top"
          :to="project ? '/#top':'#top'"
          @click.native="closeMenu()"
        >henri.love</router-link>
      </div>
      <div class="show-for-large">
        <router-link
          class="p-navMain__content__item js-navItem"
          v-for="item in nav"
          v-scroll-to="item.link"
          :data-id="item.id"
          :key="item.id"
          :to="$route.name === 'theHomePage' ?
            item.link :
            item.linkFromProject"
        >
          {{item.text}}
        </router-link>
      </div>
      <div
        class="p-navMain__content__hamburger u-clickable hide-for-large"
        ref="hamburger"
        @click="toggleMenu()"
      >
        <div class="p-navMain__content__hamburger__bar--top"></div>
        <div class="p-navMain__content__hamburger__bar"></div>
        <div class="p-navMain__content__hamburger__bar--bottom"></div>
      </div>
    </div>
    <div
      class="p-navMain__mobile flex-container align-center align-middle"
      ref="mobileNav"
    >
      <div class="flex-container flex-dir-column">
        <router-link
          class="p-navMain__mobile__item"
          v-scroll-to="item.link"
          v-for="item in nav"
          :data-id="item.id"
          :key="item.id"
          :to="$route.name === 'theHomePage' ?
            item.link :
            item.linkFromProject"
          @click.native="toggleMenu()"
        >
          {{item.text}}
        </router-link>
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
          link: '#projects',
          linkFromProject: '/#projects',
        },
        {
          id: 'about',
          text: '/about',
          link: '#about',
          linkFromProject: '/#about',
        },
        {
          id: 'contact',
          text: '/contact',
          link: '#contact',
          linkFromProject: '/#contact',
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
      if (this.project || window.innerWidth < 600) {
        if (scrollY) {
          nav.classList.add('active');
          navItems[0].classList.remove('active');
        } else {
          nav.classList.remove('active');
          navItems[0].classList.add('active');
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
    toggleMenu() {
      document.body.classList.toggle('u-noScroll');
      this.$refs.hamburger.classList.toggle('active');
      this.$refs.mobileNav.classList.toggle('active');
    },
    closeMenu() {
      document.body.classList.remove('u-noScroll');
      this.$refs.hamburger.classList.remove('active');
      this.$refs.mobileNav.classList.remove('active');
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, false);
  },
};
</script>
