<template>
  <div class="theHomePage">
    <div class="grid-container">
      <div class="o-bkg">
        <div class="sketch p5" id="sketch"></div>
        <texture-noise></texture-noise>
      </div>
      <section class="o-section--centeredBoth">
        <section-landing></section-landing>
      </section>
      <section class="o-section">
        <section-projects></section-projects>
      </section>
      <section class="o-section">
        <section-henri></section-henri>
      </section>
      <section class="o-section">
        <section-end></section-end>
      </section>
    </div>
  </div>
</template>

<script>
import P5 from 'p5';
import sketch from '@/components/modules/processing/sketch';
import SectionEnd from '@/components/modules/sections/SectionEnd'; // eslint-disable-line import/no-unresolved
import SectionHenri from '@/components/modules/sections/SectionHenri';
import SectionLanding from '@/components/modules/sections/SectionLanding';
import SectionProjects from '@/components/modules/sections/SectionProjects'; // eslint-disable-line import/no-unresolved
import TextureNoise from '@/components/modules/textures/TextureNoise';

export default {
  name: 'TheHomePage',
  components: {
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
};
</script>
