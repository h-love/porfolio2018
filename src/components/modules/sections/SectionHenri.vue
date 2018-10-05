<template>
  <div class="p-sectionHenri">
    <div class="grid-x grid-margin-x grid-margin-y align-spaced">
      <div class="cell small-5" ref="textBlock">
        <div class="p-sectionHenri__text" v-for="bloc in henriData.bloc" :key="bloc.id">
          <h2 class="p-sectionHenri__text__title u-noMargin">{{bloc.title}}</h2>
          <div>
            {{bloc.text}}
          </div>
        </div>
      </div>
      <div class="cell small-5">
        <img
          class="p-sectionHenri__img"
          ref="picture"
          src="@/assets/img/sectionHenri/overflowhidden.jpg"
        />
      </div>
    </div>
  </div>
</template>
<script>
import json from '@/assets/data/henri.json';
import utils from '@/assets/js/utils';

export default {
  name: 'SectionHenri',
  data() {
    return {
      henriData: json,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, false);
  },
  methods: {
    handleScroll() {
      const textBlock = this.$refs.textBlock;
      const textBlockTop = utils.offset(textBlock).top - window.innerHeight;
      const textBlockBottom = utils.offset(textBlock).top + textBlock.offsetHeight;
      const element = this.$refs.picture;
      const elementPosition = element.getBoundingClientRect().top;
      element.style.filter = `
        hue-rotate(${utils.mapRange(scrollY, textBlockTop, textBlockBottom, 0, 360)}deg)
        grayscale(${utils.mapRange(scrollY, textBlockTop, textBlockBottom, 100, 0)}%)
      `;

      if (elementPosition <= 0) {
        element.style.position = 'sticky';
        element.style.top = '15px';
      }
    },
  },
};
</script>
