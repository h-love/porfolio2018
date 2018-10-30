<template>
  <div class="p-sectionProjectFooter">
    <div class="grid-container">
      <div class="grid-x align-center">
        <div class="cell small-10">
          <div class="flex-container align-justify">
            <router-link class="p-sectionProjectFooter__link" :to="previousLink">
              <div class="p-sectionProjectFooter__link__next">
                previous_project
              </div>
              <div class="p-sectionProjectFooter__link__title">
                <span v-for="(letter, index) in previousText" :key="index">
                <div v-if="letter === '\u0020'">&nbsp;</div>{{letter}}
                </span>
              </div>
            </router-link>
            <router-link class="p-sectionProjectFooter__link" :to="nextLink">
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
export default {
  props: {
    previousLink: String,
    previousText: String,
    nextLink: String,
    nextText: String,
  },
};
</script>
