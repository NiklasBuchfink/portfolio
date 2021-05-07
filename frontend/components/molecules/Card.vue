<template>
  <div class="card">
    <CardImage
      :letter="project.letter"
      :image="project.image"
      :color="project.color"
    />
    <CardContent
      :title="project.title"
      :subtitle="project.subtitle"
      :categories="project.categories"
    />
  </div>
</template>

<script>
export default {
  props: ['project'],
}
</script>

<style lang="scss" scoped>
.card {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
