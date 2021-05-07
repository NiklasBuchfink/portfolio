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
  gap: 2rem;
  height: 34.5rem;
  width: 28.5rem;
  padding-left: 4rem;
  padding-bottom: 2rem;

  .title {
    @include headline-3;
    @include shadow-text;
    color: rgba($rgb-darkgray, 0.7);
  }
  .subtitle {
    @include headline-2;
    @include shadow-text;
    color: $color-gray;
  }
  .categories {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
  }
}
</style>
