<template>
  <div class="card">
    <r-grid columns="12" columns-xs="4" class="cardContainer">
      <r-cell span="6" span-s="2+10" span-xs="1+4">
        <a :href="project.link" target="blank" rel="noopener">
          <CardImage
            :letter="project.letter"
            :image="project.image"
            :color="project.color"
          />
        </a>
      </r-cell>
      <r-cell span="8+5" span-s="2+10" order="+1" span-xs="1+4"  class="cardContentCell">
        <CardContent
          :title="project.title"
          :subtitle="project.subtitle"
          :categories="project.categories"
        />
      </r-cell>
    </r-grid>
  </div>
</template>

<script>
export default {
  props: ['project'],
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  height: 100vh;
  .cardContainer {
    height: auto;
    .cardContentCell {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
