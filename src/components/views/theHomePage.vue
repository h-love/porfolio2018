<template>
  <div class="theHomePage">
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
import sketch from '@/components/modules/processing/sketch';
import NavMain from '@/components/modules/nav/NavMain';
import SectionEnd from '@/components/modules/sections/SectionEnd';
import SectionHenri from '@/components/modules/sections/SectionHenri';
import SectionLanding from '@/components/modules/sections/SectionLanding';
import SectionProjects from '@/components/modules/sections/SectionListProjects';
import TextureNoise from '@/components/modules/textures/TextureNoise';

export default {
  name: 'TheHomePage',
  components: {
    NavMain,
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
  destroyed() {
    setTimeout(() => {
      this.myp5.remove();
    }, 500);
  },
};
</script>
