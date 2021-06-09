<template>
  <div class="cardImage" data-tilt data-tilt-scale="1.05">
    <div class="cardShape" :style="colorGradient">
      <span> {{letter}} </span>
      <img
        :src="getStrapiMedia(image.formats.medium.url)"
        :alt="getStrapiMedia(image.alternativeText)"
      />
    </div>
  </div>
</template>

<script>
import { getStrapiMedia, hexRgb } from "~/utils/medias";

export default {
  props:
  [
    'letter',
    'image',
    'color'
  ],
  methods: {
    getStrapiMedia,
  },
  computed: {
    colorGradient () {
      return {
        '--project-color': hexRgb(this.color),
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cardImage {
  transform-style: preserve-3d;
  width: 100%;
  @media screen and (max-width: $max_width_xs) {
    margin-top: 2rem;
  }
  @media screen and (max-width: $max_width_xxs) {
    width: 90%;
  }
  .js-tilt-glare {
    border-radius: 2rem;
  }
  .cardShape {
    position: relative;
    display: flex;
    @include shadow-card;
    background: linear-gradient(135deg, rgba(var(--project-color), 0.8) 0%, rgb(var(--project-color)) 100%);
    border-radius: 2rem;
    max-width: 34.5rem;
    padding-bottom: 100%;
    @supports (aspect-ratio: 1 / 1) {
      aspect-ratio: 1/1;
      padding-bottom: 0;
    }
    width: 100%;
    @media screen and (max-width: $max_width_s) {
      max-width: 60rem;
    }
    span {
      position: absolute;
      @include highlight-text;
      font-size: 6rem;
      color: $color-white;
      padding: 0.75rem 0rem 0rem 2rem;
      @media screen and (max-width: $max_width_s) {
        font-size: 6rem;
      }
      @media screen and (max-width: $max_width_xxs) {
        font-size: 5rem;
      }
    }
    img {
      transform: translateZ(50px);
      position: absolute;
      object-fit: cover;
      @include shadow-mockup;
      max-width: 34.5rem;
      max-height: 34.5rem;
      @media screen and (max-width: $max_width_s) {
        max-height: 60rem;
      }
      height: 100%;
      @supports (aspect-ratio: 1 / 1) {
        aspect-ratio: 1/1;
      }
      width: 100%;
      @media screen and (max-width: $max_width_s) {
        max-width: 60rem;
      }
    }
  }
}
</style>
