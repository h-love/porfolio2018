<template>
  <div class="p-cardProject" ref="card">
    <video class="p-cardProject__video" ref="video" :src="imagePath" loop muted></video>
    <div class="p-cardProject__filter"></div>
    <div class="p-cardProject__content" ref="cardContent">
      <h2 class="p-cardProject__content__title u-noMargin">
        <span v-for="(letter, index) in projectTitle" :key="index">
          <div v-if="letter === '\u0020'">&nbsp;</div>
          {{letter}}
        </span>
      </h2>
      <div class="p-cardProject__content__subtitle">{{projectSubtitle}}</div>
      <div class="p-cardProject__content__meta">
        {{projectYear}}.{{projectType}}.{{projectTechno}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardProject',
  props: {
    imageBkg: String,
    projectTitle: String,
    projectSubtitle: String,
    projectYear: String,
    projectType: String,
    projectTechno: String,
  },
  data() {
    return {
      imagePath: '',
      hsl: 30,
      interval: '',
    };
  },
  mounted() {
    this.imagePath = require(`../../../assets/video/${this.imageBkg}`); // eslint-disable-line global-require, import/no-dynamic-require

    window.addEventListener('resize', this.handleResize, false);
    this.$refs.card.addEventListener('mouseenter', this.handleMouseenter, false);
    this.$refs.card.addEventListener('mouseleave', this.handleMouseleave, false);

    const cardWidth = this.$refs.card.offsetWidth;
    this.$refs.card.style.height = `${cardWidth}px`;
  },
  methods: {
    handleResize() {
      const cardWidth = this.$refs.card.offsetWidth;
      this.$refs.card.style.height = `${cardWidth}px`;
    },
    handleMouseenter(event) {
      const el = event;
      this.interval = setInterval(() => {
        this.hsl += 5;
        this.$refs.cardContent.style.color = `hsl(${this.hsl}, 100%, 95%)`;
        el.target.style.borderColor = `hsl(${this.hsl}, 100%, 95%)`;
      }, 1);
      this.$refs.video.play();
    },
    handleMouseleave(event) {
      const el = event;
      el.target.style.borderColor = 'white';
      this.$refs.cardContent.style.color = 'white';
      this.$refs.video.pause();
      this.$refs.video.currentTime = 0;
      clearInterval(this.interval);
    },
  },
};
</script>

