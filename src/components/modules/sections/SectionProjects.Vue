<template>
  <div class="p-sectionProjects">
    <div class="grid-container">
      <div class="grid-x grid-margin-x grid-margin-y align-spaced">
        <div v-for="project in projectsData.projects"
             :key="project.id"
             class="large-6 medium-7 small-12">
          <card-project
            :image-bkg="project.image"
            :project-title="project.title"
            :project-subtitle="project.subtitle"
            :project-year="project.year"
            :project-type="project.type"
            :project-techno="project.techno"
          ></card-project>
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

