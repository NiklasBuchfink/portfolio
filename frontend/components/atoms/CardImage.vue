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
import { getStrapiMedia } from "~/utils/medias";

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
      let hex = this.color;
      let c;
      if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return {
          '--project-color': [(c>>16)&255, (c>>8)&255, c&255].join(',')
        }
      }
      throw new Error('Bad Hex');
    }
  }
}
</script>

<style lang="scss" scoped>
.cardImage {
  .cardShape {
    display: flex;
    @include shadow-card;
    background: linear-gradient(135deg, rgba(var(--project-color), 0.8) 0%, rgb(var(--project-color)) 100%);
    border-radius: 2rem;
    width: 34.5rem;
    height: 34.5rem;
    span {
      @include highlight-text;
      color: $color-white;
      padding: 0.75rem 0rem 0rem 2rem;
    }
    img {
      position: absolute;
      object-fit: cover;
      @include shadow-mockup;
      height: 34.5rem;
      width: 34.5rem;
    }
  }
}
</style>
