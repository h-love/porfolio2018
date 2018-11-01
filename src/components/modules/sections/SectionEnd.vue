<template>
  <div class="p-sectionEnd">
    <img class="p-sectionEnd__img" ref="heart" src="@/assets/svg/heart_tatoo.svg" />
    <div class="p-sectionEnd__social">
      <div>
          Say hey ~
          <a
            class="p-sectionEnd__social__link"
            href="mailto:contact@henri.love">
            contact[at]henri.love
          </a>
      </div>
      <div>
          Follow ~ <a class="p-sectionEnd__social__link" href="https://github.com/h-love" target="_blank">Github</a>
          .
          <a class="p-sectionEnd__social__link" href="https://www.instagram.com/h.astrnfl/" target="_blank">Instagram</a>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '@/assets/js/utils';

export default {
  name: 'SectionEnd',
  mounted() {
    window.addEventListener('scroll', this.handleScroll, false);
  },
  methods: {
    handleScroll() {
      const valueOpacity = utils.mapRange(
        scrollY,
        document.body.clientHeight - window.innerHeight - (window.innerHeight / 2),
        document.body.clientHeight - window.innerHeight,
        0,
        1,
      );
      const valueGrayscale = utils.mapRange(
        scrollY,
        document.body.clientHeight - window.innerHeight - (window.innerHeight / 10),
        document.body.clientHeight - window.innerHeight,
        100,
        0,
      );
      this.$refs.heart.style.filter = `grayscale(${valueGrayscale}%)`;
      this.$refs.heart.style.opacity = `${valueOpacity}`;

      const offset = 10;
      if (scrollY >= document.body.clientHeight - window.innerHeight - offset) {
        this.$refs.heart.classList.add('active');
      } else {
        this.$refs.heart.classList.remove('active');
      }
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, false);
  },
};
</script>
