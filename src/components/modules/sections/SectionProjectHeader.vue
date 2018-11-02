<template>
  <div
    class="p-sectionProjectHeader flex-container flex-dir-column align-center align-middle"
  >
    <title-main :title="title"></title-main>
    <div class="p-sectionProjectHeader__subtitle">{{subtitle}}</div>
  </div>
</template>
<script>
import TitleMain from '@/components/modules/titles/TitleMain';

export default {
  props: {
    background: String,
    title: String,
    subtitle: String,
  },
  components: {
    TitleMain,
  },
};
</script>
