<template>
  <div class="p-sectionProjects">
    <div class="grid-x grid-margin-x grid-margin-y align-spaced">
      <div v-for="project in projectsData.projects"
           :key="project.id"
           class="cell large-5 medium-7 small-10">
        <card-project
          :video-bkg="project.video"
          :video-poster="project.video_poster"
          :project-link="project.link"
          :project-title="project.title"
          :project-subtitle="project.subtitle"
          :project-year="project.year"
          :project-type="project.type"
          :project-techno="project.techno"
        ></card-project>
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

