<template>
  <div class="tileImage">
    <div class="tile">
      <span>N</span>
      <div class="mask">
        <img class="heroImage"
          :src="getStrapiMedia(heroimage.formats.medium.url)"
          :alt="getStrapiMedia(heroimage.alternativeText)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from "~/utils/medias";

export default {
 props:
  [
    'heroimage',
  ],
  methods: {
    getStrapiMedia,
  },
}
</script>

<style lang="scss" scoped>
.tileImage {
  .tile {
    display: flex;
    @include shadow-card;
    background: linear-gradient(135deg, rgba($rgb-darkgray, 0.8) 0%, $color-darkgray 100%);
    border-radius: 2rem;
    width: 27rem;
    height: 27rem;
    transform: rotate(-20deg);
    span {
      @include highlight-text;
      color: $color-white;
      padding: 0.75rem 0rem 0rem 2rem;
    }
    .mask {
      position: absolute;
      width: 33rem;
      height: 33rem;
      border-radius: 2rem;
      overflow: hidden;
      transform: translate(0rem, -6rem);
      @include shadow-mockup;
      img {
        position: absolute;
        object-fit: cover;
        width: 32.5rem;
        transform: translate(-2rem, 2rem) rotate(20deg);
      }
    }
  }
}
</style>
