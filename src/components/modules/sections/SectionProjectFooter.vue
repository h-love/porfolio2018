<template>
  <div class="p-sectionProjectFooter">
    <div class="p-sectionProjectFooter__pinkBkg"></div>
    <div class="grid-container">
      <div class="grid-x align-center">
        <div class="cell large-10 small-12">
          <div class="flex-container align-justify">
            <router-link
              class="p-sectionProjectFooter__link"
              :to="previousLink"
              @click.native="isNext(false)"
            >
              <div class="p-sectionProjectFooter__link__next">
                previous_project
              </div>
              <div class="p-sectionProjectFooter__link__title">
                <span v-for="(letter, index) in previousText" :key="index">
                <div v-if="letter === '\u0020'">&nbsp;</div>{{letter}}
                </span>
              </div>
            </router-link>
            <router-link
              class="p-sectionProjectFooter__link"
              :to="nextLink"
              @click.native="isNext(true)"
            >
              <div class="p-sectionProjectFooter__link__next">
                next_project
              </div>
              <div class="p-sectionProjectFooter__link__title">
                <span v-for="(letter, index) in nextText" :key="index">
                <div v-if="letter === '\u0020'">&nbsp;</div>{{letter}}
                </span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-link
      to="/#projects"
      class="p-sectionProjectFooter__back u-clickable"
    >
      back to projects
    </router-link>
    <!-- <texture-noise></texture-noise> -->
  </div>
</template>
<script>
import EventBus from '@/assets/js/bus';
import TextureNoise from '@/components/modules/textures/TextureNoise';

export default {
  name: 'SectionProjectFooter',
  props: {
    previousLink: String,
    previousText: String,
    nextLink: String,
    nextText: String,
  },
  components: {
    TextureNoise,
  },
  methods: {
    isNext(value) {
      EventBus.$emit('is-next', value);
    },
  },
};
</script>
