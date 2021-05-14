<template>
  <div class="card">
    <a :href="project.link" target="blank">
      <CardImage
        :letter="project.letter"
        :image="project.image"
        :color="project.color"
      />
    </a>
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
