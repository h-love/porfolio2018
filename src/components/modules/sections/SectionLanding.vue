<template>
  <div class="p-sectionLanding">
    <title-main title="henri.love"></title-main>
    <div class="p-sectionLanding__txt u-noMargin">
      <span class="p-sectionLanding__txt--alt">creative engineer</span>
      since 2018
    </div>
    <div class="p-sectionLanding__txt">loving universe since 1995</div>
    <div class="p-sectionLanding__txt">
      <span class="p-sectionLanding__txt--alt">front-end web dev.lover</span>
    </div>
    <div class="p-sectionLanding__txt">
      playing in
      <span class="p-sectionLanding__txt--alt">Paris</span>
    </div>
    <a
      class="p-sectionLanding__cta hoverable"
      ref="feelthelove"
      href="#projects"
      v-scroll-to="{el: '#projects'}"
    >
      <div class="p-sectionLanding__cta__txt">
        <span>f</span><span>e</span><span>e</span><span>l</span>
        <span>t</span><span>h</span><span>e</span>
        <span>l</span><span>o</span><span>v</span><span>e</span>
      </div>
      <div class="p-sectionLanding__cta__img">
        <img class="p-sectionLanding__cta__img__bow" src="@/assets/svg/arrow_heart_bow_thick.svg" />
        <div class="p-sectionLanding__cta__img__arrow" ref="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="11.03" height="60.57" viewBox="0 0 11.03 60.57"><title>arrow_heart_arrow_thick</title><line x1="5.52" y1="51.07" x2="5.52" y2="4.07" fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><polyline points="8.6 1 5.52 3.85 2.19 1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><polyline points="8.6 4.85 5.52 7.7 2.19 4.85" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><polyline points="8.6 8.7 5.52 11.55 2.19 8.7" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path class="p-sectionLanding__cta__img__arrow__tip" d="M5.49,53.8a2.32,2.32,0,0,0-2.37-2.37A2.07,2.07,0,0,0,1,53.8a20.57,20.57,0,0,1,4.51,5.7" transform="translate(0.03 0.07)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path class="p-sectionLanding__cta__img__arrow__tip" d="M5.48,53.8a2.32,2.32,0,0,1,2.38-2.37A2.07,2.07,0,0,1,10,53.8a20.57,20.57,0,0,0-4.51,5.7" transform="translate(0.03 0.07)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import utils from '@/assets/js/utils';
import TitleMain from '@/components/modules/titles/TitleMain';

export default {
  name: 'SectionLanding',
  components: {
    TitleMain,
  },
  data() {
    return {
      firstArrowPosition: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, false);
    this.handleScroll();
    const element = this.$refs.arrow.getBoundingClientRect();
    this.firstArrowPosition = (
      (-element.y - (2 * element.height))
      + (window.innerHeight / 2)
    );
  },
  methods: {
    handleScroll() {
      if (scrollY) {
        const valueY = utils.mapRange(
          scrollY,
          0,
          document.body.clientHeight,
          5,
          this.firstArrowPosition,
        );
        this.$refs.arrow.classList.add('active');
        this.$refs.feelthelove.classList.remove('hoverable');
        this.$refs.feelthelove.classList.remove('u-clickable');
        this.$refs.arrow.style.transform = `translate(-50%, ${valueY}px)`;
      } else {
        this.$refs.arrow.classList.remove('active');
        this.$refs.arrow.style.transform = '';
        this.$refs.feelthelove.classList.add('hoverable');
        this.$refs.feelthelove.classList.add('u-clickable');
      }

      if (window.innerWidth < 1024) {
        const projects = document.getElementById('projects');
        const about = document.getElementById('about');
        const arrowPosition = utils.offset(this.$refs.arrow).top;
        const start = utils.offset(projects).top;
        const end = utils.offset(about).top + about.offsetHeight;
        if (arrowPosition > start && arrowPosition < end) {
          this.$refs.arrow.classList.add('u-invisible');
        } else {
          this.$refs.arrow.classList.remove('u-invisible');
        }
      }
    },
  },
  destroyed() {
    window.removeEventListener('mousemove', this.handleMouseMove, false);
    window.removeEventListener('scroll', this.handleScroll, false);
  },
};
</script>
