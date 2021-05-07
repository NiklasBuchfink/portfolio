<template>
  <div class="cardImage">
    <div class="cardShape" :style="colorGradient">
      <span> {{letter}} </span>
      <img
        :src="`http://localhost:1337${image.url}`"
        :alt="`http://localhost:1337${image.alternativeText}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  props:
  [
    'letter',
    'image',
    'color'
  ],
  computed: {
    colorGradient () {
      return {
        '--project-color': this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cardImage {
  // display: flex;
  // flex-direction: row;
  .cardShape {
    @include shadow-card;
    display: flex;
    background-color: var(--project-color);
    border-radius: 2rem;
    width: 34.5rem;
    height: 34.5rem;
    span {
      @include headline-1;
      color: $color-white;
      padding: 1.5rem 0rem 0rem 2rem;
    }
    img {
      @include shadow-mockup;
      height: 34.5rem;
      width: 34.5rem;
      object-fit: cover;
      position: absolute;
    }
  }
}
</style>
