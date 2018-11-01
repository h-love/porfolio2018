<template>
  <div class="p-sectionProjectFooter">
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
  </div>
</template>
<script>
import EventBus from '@/assets/js/bus';

export default {
  props: {
    previousLink: String,
    previousText: String,
    nextLink: String,
    nextText: String,
  },
  methods: {
    isNext(value) {
      EventBus.$emit('is-next', value);
    },
  },
};
</script>
