<template>
  <div class="categorieBadge">
    {{categorie}}
  </div>
</template>
<script>
export default {
    props:
  [
    'categorie',
  ]
}
</script>
<style lang="scss" scoped>
.categorieBadge {
  @include badge-text;
  @include shadow-black;
  width: auto;
  padding: 0.5rem 1rem;
  border-radius: $box-radius;
  color: $color-white;
}
</style>
