<template>
  <div>
    <Head title="Niklas Buchfink - Designer & Engineer" description="I/’m a interaction designer and electrical engineer with expertise in high fidelity prototyping and web development." />
    <r-grid class="frontpageGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="fullpage" span="1-12" span-s="1-8" span-xs="1-4">
        <r-grid class="frontpageHeaderGrid" columns="12" columns-s="8" columns-xs="4">
          <r-cell class="headerContentCell" span="6" span-s="2+6" span-xs="1..">
            <div class="frontpageHeaderItem">
              <p class="name">Niklas Buchfink</p>
              <h1>
                Design &amp;<br />
                Engineering
              </h1>
              <p class="frontpageText">
                I’m a interaction designer and electrical engineer with
                expertise in high fidelity prototyping and web development.
              </p>
              <div class="buttonWrapper">
                <a href="mailto:hey@niklasbuchfink.com">
                  <ChatButton />
                </a>
              </div>
            </div>
          </r-cell>
          <r-cell class="heroImageCell" span="6" span-s="3+4" order-s="-1" span-xs="2-4">
            <div class="heroimageWrapper">
              <HeroImage :heroimage="startpage.heroimage" />
            </div>
          </r-cell>
        </r-grid>
      </r-cell>
      <r-cell
        span="12" span-s="2+6" span-xs="1+4"
        class="cards fullpage"
        v-for="project in orderBy(projects,'order')"
        v-bind:key="'Project' + project.id"
      >
        <div class="cardWrapper" v-if="project.startpage">
          <Card :project="project" />
        </div>
      </r-cell>
    </r-grid>
  </div>
</template>
<script>
import { projectQuery, startpageQuery } from '~/graphql/query'
import Vue2Filters from 'vue2-filters'

export default {
  data() {
    return {
      projects: [],
      startpage: [],      
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
    },
  },
  mixins: [Vue2Filters.mixin],
  layout: 'startpage',
}
</script>

<style lang="scss" scoped>
.frontpageGrid {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  r-cell {
    display: flex;
    align-items: center;
    &.headerContentCell {
      height: 100vh;
      @media screen and (max-width: $max_width_s) {
        height: 50vh;
      }
      @media screen and (max-width: $max_width_xs) {
        height: 70vh;
      }
    }

    &.heroImageCell {
      align-items: center;
      justify-content: center;
      height: 100vh;
      @media screen and (max-width: $max_width_s) {
        margin-top: 4rem;
        margin-bottom: -4rem;
        height: 50vh;
      }
      @media screen and (max-width: $max_width_xs) {
        height: 30vh;
      }
    }
  }
  .frontpageHeaderItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .name {
      @include headline-3;
      color: rgba($rgb-darkgray, 0.7);
      padding-left: 0.25rem;
    }
    h1 {
      margin: 1.75rem 0;
      color: $color-darkgray;
    }
    .frontpageText {
      @include paragraph-large;
      color: rgba($rgb-darkgray, 0.7);
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
    width: 100%;
    max-width: 34.5rem;
  }
}
</style>
