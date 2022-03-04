<template>
  <div
    v-if="image != null"
    class="imageTileContainer"
    :style="backgroundImage(image)"
  ></div>
</template>
<script>
import { backgroundImage } from '~/utils/medias'

export default {
  props: ['image'],
  methods: {
    backgroundImage,
  },
}
</script>
<style lang="scss" scoped>
.imageTileContainer {
  width: 100%;
  height: 100%;
  @include shadow-image;
  border-radius: 2rem;
  background-size: cover;
  background-position: center;
}
</style>
