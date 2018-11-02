<template>
  <div class="p-titleMain">
    <div class="p-titleMain__txt js-movingTitle">{{title}}</div>
    <div class="p-titleMain__txt js-movingTitle">{{title}}</div>
    <h1 class="p-titleMain__txt  u-noMargin">{{title}}</h1>
  </div>
</template>
<script>
import utils from '@/assets/js/utils';

export default {
  props: {
    title: String,
  },
  mounted() {
    window.addEventListener('mousemove', this.handleMouseMove, false);
  },
  methods: {
    handleMouseMove(event) {
      const elements = document.getElementsByClassName('js-movingTitle');

      const valueX0 = utils.mapRange(event.clientX, 0, window.innerWidth, 48, 52);
      const valueX1 = utils.mapRange(event.clientX, 0, window.innerWidth, 52, 48);
      const valueY0 = utils.mapRange(event.clientY, 0, window.innerHeight, -8, 8);
      const valueY1 = utils.mapRange(event.clientY, 0, window.innerHeight, 8, -8);

      elements[0].style.transform = `translate(-${valueX0}%, ${valueY0}%)`;
      elements[1].style.transform = `translate(-${valueX1}%, ${valueY1}%)`;
    },
  },
  destroyed() {
    window.removeEventListener('mousemove', this.handleMouseMove, false);
  },
};
</script>
