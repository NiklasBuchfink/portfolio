<template>
  <div class="cardContent">
    <div class="title">
      {{title}}
    </div>
    <div class="subtitle">
      {{subtitle}}
    </div>
    <div class="categories">
      <div class="categorie"
        v-for="categorie in categories"
        v-bind:key="categorie.id"
      >
        <CategorieBadge :categorie="categorie.title" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:
  [
    'title',
    'subtitle',
    'categories'
  ]
}
</script>

<style lang="scss" scoped>
.cardContent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  max-width: 28.5rem;
  width: 100%;
  padding-bottom: 2rem;
  @media screen and (max-width: $max_width_s) {
    padding-top: 4rem;
    max-width: 60rem;
    padding-bottom: 0rem;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: $max_width_xs) {
    padding-top: 2rem;
  }
  .title {
    @include headline-3;
    @include shadow-text;
    color: rgba($rgb-darkgray, 0.7);
    margin-bottom: 2rem;
  }
  .subtitle {
    @include headline-2;
    @include shadow-text;
    color: $color-gray;
    margin-bottom: 2rem;
  }
  .categories {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    .categorie {
      margin-right: 1rem;
      margin-top: 1rem;
    }
  }
}
</style>
