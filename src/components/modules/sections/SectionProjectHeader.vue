<template>
  <div class="p-sectionProjectHeader flex-container flex-dir-column align-center align-middle">
    <div
      class="p-sectionProjectHeader__image"
      :style="{ 'background-image': 'url(' + background + ')' }"
    ></div>
    <div class="p-sectionProjectHeader__pinkBkg"></div>
    <title-main :title="title"></title-main>
    <div class="p-sectionProjectHeader__subtitle">{{subtitle}}</div>
    <!-- <texture-noise></texture-noise> -->
  </div>
</template>
<script>
import TextureNoise from '@/components/modules/textures/TextureNoise';
import TitleMain from '@/components/modules/titles/TitleMain';

export default {
  name: 'sectionProjectHeader',
  props: {
    background: String,
    title: String,
    subtitle: String,
  },
  components: {
    TextureNoise,
    TitleMain,
  },
};
</script>
