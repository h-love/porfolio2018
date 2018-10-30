<template>
  <div class="p-sectionProjectPictures">
    <div class="grid-container">
      <div class="grid-x align-center">
        <div class="cell small-10">
          <div
            class="p-sectionProjectPictures__item"
            v-for="(image, index) in pictures"
            :key="index"
          >
            <div class="p-sectionProjectPictures__item__text">{{image.text}} :</div>
            <img class="p-sectionProjectPictures__item__image" :src="image.src" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pictures: Array,
  },
};
</script>
