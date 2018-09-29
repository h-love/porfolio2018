<template>
  <div class="theHomePage">
    <div class="theHomePage-bkg">
      <div class="sketch p5" id="sketch"></div>
      <texture-noise></texture-noise>
    </div>
    <section class="theHomePage-section">
      <section-landing></section-landing>
    </section>
  </div>
</template>

<script>
import P5 from 'p5';
import sketch from './../modules/processing/sketch';
import SectionLanding from './../modules/sections/SectionLanding';
import TextureNoise from './../modules/textures/TextureNoise';

export default {
  name: 'TheHomePage',
  components: {
    SectionLanding,
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
