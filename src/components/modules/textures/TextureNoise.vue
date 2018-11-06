<template>
  <canvas id="noise" class="noise"></canvas>
</template>
<script>
const noise = () => {
  let canvasbody;
  let ctx;
  let wWidth;
  let wHeight;
  const noiseData = [];
  let frame = 0;
  let loopTimeout;
  // Create Noise
  const createNoise = () => {
    const idata = ctx.createImageData(wWidth, wHeight);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;
    for (let i = 0; i < len; i += 1) {
      if (Math.random() < 0.5) {
        buffer32[i] = 0xff000000;
      }
    }
    noiseData.push(idata);
  };
  // Play Noise
  const paintNoise = () => {
    if (frame === 9) {
      frame = 0;
    } else {
      frame += 1;
    }
    ctx.putImageData(noiseData[frame], 0, 0);
  };
  // Loop
  const loop = () => {
    paintNoise(frame);
    loopTimeout = window.setTimeout(() => {
      window.requestAnimationFrame(loop);
    }, (100 / 25));
  };
  // Setup
  const setup = () => {
    canvasbody = document.getElementById('noise');
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;
    canvasbody.width = wWidth;
    canvasbody.height = wHeight;
    for (let i = 0; i < 10; i += 1) {
      createNoise();
    }
    loop();
  };
  // Reset
  let resizeThrottle;
  const reset = () => { // eslint-disable-line no-unused-vars
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeThrottle);
      resizeThrottle = window.setTimeout(() => {
        window.clearTimeout(loopTimeout);
        setup();
      }, 200);
    }, false);
  };
  // Init
  const init = (() => { // eslint-disable-line no-unused-vars
    canvasbody = document.getElementById('noise');
    ctx = canvasbody.getContext('2d');
    setup();
  })();
};

export default {
  name: 'TextureNoise',
  mounted() {
    noise();
  },
  methods: {
    destroyCanvas() {
      const element = document.getElementById('noise');
      element.remove();
    },
  },
  destroyed() {
    setTimeout(() => {
      this.destroyCanvas();
    }, 300);
  },
};
</script>
