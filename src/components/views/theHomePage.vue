<template>
  <div class="theHomePage">
    <preloader></preloader>
    <div class="grid-container">
      <div class="o-bkg">
        <div class="sketch p5" id="sketch"></div>
        <texture-noise></texture-noise>
      </div>
      <nav-main></nav-main>
      <div class="o-transition o-transition--right"></div>
      <section class="o-section--centeredBoth" id="top">
        <section-landing></section-landing>
      </section>
      <section class="o-section" id="projects">
        <section-projects></section-projects>
      </section>
      <section class="o-section" id="about">
        <section-henri></section-henri>
      </section>
      <section class="o-section u-noPaddingTop" id="contact">
        <section-end></section-end>
      </section>
    </div>
  </div>
</template>

<script>
import P5 from 'p5';
import json from '@/assets/data/projects.json';
import sketch from '@/components/modules/processing/sketch';
import NavMain from '@/components/modules/nav/NavMain';
import Preloader from '@/components/modules/preloader/Preloader';
import SectionEnd from '@/components/modules/sections/SectionEnd';
import SectionHenri from '@/components/modules/sections/SectionHenri';
import SectionLanding from '@/components/modules/sections/SectionLanding';
import SectionProjects from '@/components/modules/sections/SectionListProjects';
import TextureNoise from '@/components/modules/textures/TextureNoise';

export default {
  name: 'TheHomePage',
  components: {
    NavMain,
    Preloader,
    SectionEnd,
    SectionHenri,
    SectionLanding,
    SectionProjects,
    TextureNoise,
  },
  data() {
    return {
      myp5: null,
    };
  },
  mounted() {
    this.myp5 = new P5(sketch, document.getElementById('sketch'));
  },
  activated() {
    for (let i = 0; i < json.projects.length; i += 1) {
      for (let j = 0; j < json.projects[i].pictures.length; j += 1) {
        const img = new Image();
        img.src = json.projects[i].pictures[j].src;
      }
      const req = new XMLHttpRequest();
      req.open('GET', json.projects[i].video, true);
      req.responseType = 'blob';
      req.send();
      req.onload = () => {
        if (i === json.projects.length - 1) {
          this.$nextTick(() => {
            this.$store.dispatch('endPreload');
          });
        }
      };
    }
  },
  destroyed() {
    this.myp5.remove();
  },
};
</script>
