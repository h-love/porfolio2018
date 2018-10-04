<template>
  <div class="p-sectionHenri">
    <div class="grid-x grid-margin-x grid-margin-y align-spaced">
      <div class="cell small-5">
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
      const element = this.$refs.picture;
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition <= 0) {
        element.style.position = 'sticky';
        element.style.top = '15px';
      }
    },
  },
};
</script>
