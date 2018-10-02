<template>
  <div class="theHomePage">
    <div class="o-bkg">
      <div class="sketch p5" id="sketch"></div>
      <texture-noise></texture-noise>
    </div>
    <section class="o-section--centeredBoth">
      <section-landing></section-landing>
    </section>
    <section>
      <section-projects></section-projects>
    </section>
  </div>
</template>

<script>
import P5 from 'p5';
import sketch from '@/components/modules/processing/sketch';
import SectionLanding from '@/components/modules/sections/SectionLanding';
import SectionProjects from '@/components/modules/sections/SectionProjects';
import TextureNoise from '@/components/modules/textures/TextureNoise';

export default {
  name: 'TheHomePage',
  components: {
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
