<template>
  <div class="container">
    <div class="frontpageHeader">
      <div class="frontpageHeaderItem">
        <p class="name">Niklas Buchfink</p>
        <h1>
          Design &amp;<br>
          Engineering
        </h1>
        <p class="frontpageText">
          I’m a user experience designer and electrical engineer with expertise in high fidelity prototyping and web development.
        </p>
        <div class="buttonWrapper">
          <ChatButton />
        </div>
      </div>
      <div class="heroimageWrapper">
        <HeroImage :heroimage="startpage.heroimage"/>
      </div>
    </div>
    <div class="cards"
      v-for="project in projects"
      v-bind:key="project.id"
    >
      <div
        v-if="project.startpage"
      >
        <Card :project="project"/>
      </div>
    </div>
  </div>
</template>
<script>
import { projectQuery, startpageQuery } from '~/graphql/query'

export default {
  data() {
    return {
      projects:[],
      startpage:[]
    }
  },
  apollo: {
    projects: {
      prefetch: true,
      query: projectQuery,
    },
    startpage: {
      prefetch: true,
      query: startpageQuery,
    }
  },
  layout: 'startpage'
}
</script>

<style lang="scss" scoped>
.frontpageHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  .frontpageHeaderItem{
    width: 34.5rem;
    .name {
      @include headline-3;
      color: rgba($rgb-darkgray , 0.7);
      padding-left: 0.25rem;
    }
    h1{
      margin: 1.75rem 0;
      color: $color-darkgray;
    }
    .frontpageText {
      @include paragraph-large;
      color: rgba($rgb-darkgray , 0.7);
      margin-bottom: 2.625rem;
      padding-left: 0.25rem;
    }
    .buttonWrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
    }
  }
  .heroimageWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34.5rem;
  }
}
</style>
