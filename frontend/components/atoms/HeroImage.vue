<template>
  <div class="tileImage">
    <div class="tile">
      <span>N</span>
      <div class="mask">
        <img
          v-if="heroimage != null"
          class="heroImage"
          :src="getStrapiMedia(heroimage.formats.medium.url)"
          :alt="getStrapiMedia(heroimage.alternativeText)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias'

export default {
  props: ['heroimage'],
  methods: {
    getStrapiMedia,
  },
}
</script>

<style lang="scss" scoped>
.tileImage {
  position: relative;
  left: 5rem;
  width: 100%;
  height: 100%;
  @media screen and (max-width: $max_width_s) {
    left: 3rem;
  }
  @media screen and (max-width: $max_width_xs) {
    width: 70%;
    height: 70%;
    left: 0rem;
  }
  @media screen and (max-width: $max_width_xxs) {
    width: 60%;
    height: 60%;
    left: 2rem;
  }
  .tile {
    position: relative;
    display: flex;
    @include shadow-card;
    background: linear-gradient(
      135deg,
      rgba($rgb-darkgray, 0.8) 0%,
      $color-darkgray 100%
    );
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    max-width: 27rem;
    max-height: 27rem;
    padding-bottom: 27rem;
    @media screen and (max-width: $max_width_s) {
      padding-bottom: 100%;
    }
    @supports (aspect-ratio: 1 / 1) {
      aspect-ratio: 1 / 1;
      padding-bottom: 0;
      @media screen and (max-width: $max_width_s) {
        padding-bottom: 0;
      }
    }
    transform: rotate(-20deg);
    span {
      position: absolute;
      @include highlight-text;
      font-size: 6rem;
      color: $color-white;
      padding: 0.75rem 0rem 0rem 2rem;
      @media screen and (max-width: $max_width_s) {
        font-size: 8vw;
      }
      @media screen and (max-width: $max_width_xs) {
        padding: 0.75rem 0rem 0rem 1.5rem;
        font-size: 10vw;
      }
      @media screen and (max-width: $max_width_xxs) {
        font-size: 8vw;
      }
    }
    .mask {
      position: absolute;
      left: 0;
      bottom: -6rem;
      width: 100%;
      height: 130%;
      max-width: 33rem;
      max-height: 33rem;
      padding-bottom: 100%;
      @supports (aspect-ratio: 1 / 1) {
        aspect-ratio: 1 / 1;
        padding-bottom: 0;
      }
      border-radius: 2rem;
      overflow: hidden;
      transform: translate(0rem, -6rem);
      @include shadow-mockup;
      img {
        position: absolute;
        object-fit: cover;
        width: 120%;
        max-width: 32.5rem;
        transform: translate(-2rem, 0.5rem) rotate(20deg);
        @media screen and (max-width: $max_width_s) {
          transform: translate(-1.25rem, 2rem) rotate(20deg);
        }
        @media screen and (max-width: $max_width_xs) {
          transform: translate(-0.5rem, 2rem) rotate(20deg);
        }
      }
    }
  }
}
</style>
