<template>
  <div
    class="p-preloader flex-container align-center align-middle"
    :class="{'u-invisible' : !this.$store.getters.isPreloading }">
    <div class="p-preloader__text">
      <span v-for="(letter, index) in 'henri.love'" :key="index">
        {{letter}}
      </span>
    </div>
  </div>
</template>
