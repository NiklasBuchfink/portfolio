<template>
  <div class="cardImage">
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
  width: 100%;
  @media screen and (max-width: $max_width_xs) {
    margin-top: 2rem;
  }
  @media screen and (max-width: $max_width_xxs) {
    width: 90%;
  }
  .cardShape {
    position: relative;
    display: flex;
    @include shadow-card;
    background: linear-gradient(135deg, rgba(var(--project-color), 0.8) 0%, rgb(var(--project-color)) 100%);
    border-radius: 2rem;
    max-width: 34.5rem;
    aspect-ratio: 1/1;
    width: 100%;
    height: 100%;
    @media screen and (max-width: $max_width_s) {
      max-width: 60rem;
    }
    span {
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
      position: absolute;
      object-fit: cover;
      @include shadow-mockup;
      max-width: 34.5rem;
      aspect-ratio: 1/1;
      width: 100%;
      @media screen and (max-width: $max_width_s) {
        max-width: 60rem;
      }
    }
  }
}
</style>
