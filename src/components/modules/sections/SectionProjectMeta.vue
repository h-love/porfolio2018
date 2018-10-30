<template>
  <div class="p-sectionProjectMeta">
    <div class="grid-container">
      <div class="grid-x align-center">
        <div class="p-sectionProjectMeta__header cell small-10 flex-container align-justify">
          <div class="p-sectionProjectMeta__header__col">
            <div class="p-sectionProjectMeta__header__col__title">
              Year
            </div>
            <div class="p-sectionProjectMeta__header__col__data">
              {{year}}
            </div>
          </div>
          <div>
            <div class="p-sectionProjectMeta__header__col__title">
              Client
            </div>
            <div class="p-sectionProjectMeta__header__col__data">
              {{client}}
            </div>
          </div>
          <div>
            <div class="p-sectionProjectMeta__header__col__title">
              Techno
            </div>
            <div class="p-sectionProjectMeta__header__col__data">
              {{techno}}
            </div>
          </div>
        </div>
      </div>
      <div class="grid-x align-center">
        <div class="p-sectionProjectMeta__content cell small-6">
          <p v-for="(paragraph, index) in description" :key="index" v-html="paragraph"></p>
        </div>
      </div>
      <div class="grid-x align-center">
        <a  v-if="link" class="p-sectionProjectMeta__link" :href="link" target="_blank">
          <span>T</span><span>r</span><span>y</span>
          <span>i</span><span>t</span><span>!</span>
        </a>
        <div v-else  class="p-sectionProjectMeta__soon">Available soon!</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    year: String,
    client: String,
    techno: String,
    description: Array,
    link: String,
  },
};
</script>
