<template>
  <div class="theHomePage">
    <div class="sketch p5" id="sketch"></div>
  </div>
</template>

<script>
import P5 from 'p5';
import sketch from './sketch';

export default {
  name: 'TheHomePage',
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
