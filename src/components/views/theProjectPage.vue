<template>
  <div class="theProjectPage">
    <div class="grid-container">
      <div
        class="o-transition o-transition--left"
        ref="transition"
      ></div>
      {{ project.title }}
    </div>
  </div>
</template>

<script>
import json from '@/assets/data/projects.json';

export default {
  name: 'TheProjectPage',
  components: {
  },
  data() {
    return {
      id: this.$route.params.id,
      project: {},
    };
  },
  mounted() {
    this.project = json.projects.find(item => item.link === this.$route.params.id);
  },
};
</script>
