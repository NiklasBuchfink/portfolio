<template>
  <div>
    <r-grid class="aboutGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="aboutTitleContent" span="6" span-s="2+6" span-xs="1-4">
        <h1>
          Who I am
        </h1>
        <p>
          I’m a user experience designer and electrical engineer with expertise in high fidelity prototyping and web development. I’m a user experience designer and electrical engineer with expertise in high fidelity prototyping and web development.
        </p>
      </r-cell>
      <r-cell class="aboutTitleImage" span="8-12" span-s="2+6" span-xs="1-4">
        <ImageTile :image="aboutpage.headerimage"/>
      </r-cell>
    </r-grid>
  </div>
</template>
<script>
import { aboutpageQuery } from '~/graphql/query'

export default {
  data() {
    return {
      aboutpage: [],
    }
  },
  apollo: {
    aboutpage: {
      prefetch: true,
      query: aboutpageQuery,
    },
  },
}
</script>

<style lang="scss" scoped>
.aboutTitleContent{
  margin-top: 8rem;
  h1 {
    margin-bottom: 2rem;
  }
  p{
    @include paragraph-large;
  }
}
.aboutTitleImage{
  margin-top: 8rem;
  width: 100%;
  height: 20rem;
  @media screen and (max-width: $max_width_s) {
    margin-top: 4rem;
  }
}
</style>