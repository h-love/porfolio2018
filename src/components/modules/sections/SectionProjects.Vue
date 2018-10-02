<template>
  <div class="p-sectionProjects">
    <div class="grid-container">
      <div class="grid-x grid-margin-x grid-margin-y align-spaced">
        <div v-for="project in projectsData.projects" :key="project.id" class="small-6">
          <card-project></card-project>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardProject from '@/components/modules/cards/CardProject';
import json from '@/assets/data/projects.json';

export default {
  name: 'SectionProjects',
  components: {
    CardProject,
  },
  data() {
    return {
      projectsData: json,
    };
  },
  methods: {
  },
};
</script>

