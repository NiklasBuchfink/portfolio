<template>
  <r-grid columns="12" columns-s="4" class="card">
    <r-cell span="6" span-s="4">
      <a :href="project.link" target="blank">
        <CardImage
          :letter="project.letter"
          :image="project.image"
          :color="project.color"
        />
      </a>
    </r-cell>
    <r-cell span="8+5" span-s="4">
      <CardContent
        :title="project.title"
        :subtitle="project.subtitle"
        :categories="project.categories"
      />
    </r-cell>
  </r-grid>
</template>

<script>
export default {
  props: ['project'],
}
</script>

<style lang="scss" scoped>
.card {
  height: 100vh;
  //display: flex;
  //flex-direction: row;
  //justify-content: space-between;
  align-items: center;
}
</style>
