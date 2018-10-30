<template>
  <div
    class="p-sectionProjectHeader flex-container flex-dir-column align-center align-middle"
    :style="{ 'background-image': 'url(' + background + ')' }"
  >
    <h1 class="p-sectionProjectHeader__title u-noMargin">{{title}}</h1>
    <div class="p-sectionProjectHeader__subtitle">{{subtitle}}</div>
  </div>
</template>
<script>
export default {
  props: {
    background: String,
    title: String,
    subtitle: String,
  },
};
</script>
