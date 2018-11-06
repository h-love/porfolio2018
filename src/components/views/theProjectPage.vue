<template>
  <div class="theProjectPage">
    <div class="o-transition o-transition--left"></div>
    <div class="o-transition o-transition--down"></div>
    <div class="o-transition o-transition--up"></div>
    <nav-main :project="true"></nav-main>
    <section-project-header
      :title="project.title"
      :subtitle="project.subtitle"
      :background="project.headerImg"
    >
    </section-project-header>
    <section-project-meta
      :year="project.year"
      :client="project.client"
      :techno="project.techno"
      :description="project.description"
      :link="project.linkToProject"
    >
    </section-project-meta>
    <section-project-pictures
      :pictures="project.pictures"
    >
    </section-project-pictures>
    <section-project-footer
      :previousLink="project.linkToPreviousProject"
      :previousText="project.previousProject"
      :nextLink="project.linkToNextProject"
      :nextText="project.nextProject"
    >
    </section-project-footer>
    <texture-noise></texture-noise>
  </div>
</template>

<script>
import json from '@/assets/data/projects.json';
import NavMain from '@/components/modules/nav/NavMain';
import SectionProjectHeader from '@/components/modules/sections/SectionProjectHeader';
import SectionProjectMeta from '@/components/modules/sections/SectionProjectMeta';
import SectionProjectPictures from '@/components/modules/sections/SectionProjectPictures';
import SectionProjectFooter from '@/components/modules/sections/SectionProjectFooter';
import TextureNoise from '@/components/modules/textures/TextureNoise';

export default {
  name: 'TheProjectPage',
  components: {
    NavMain,
    SectionProjectHeader,
    SectionProjectMeta,
    SectionProjectPictures,
    SectionProjectFooter,
    TextureNoise,
  },
  created() {
    this.project = json.projects.find(item => item.link === this.$route.params.id);
  },
  data() {
    return {
      id: this.$route.params.id,
      project: {},
    };
  },
  watch: {
    '$route'() { // eslint-disable-line object-shorthand
      this.project = json.projects.find(item => item.link === this.$route.params.id);
    },
  },
};
</script>
