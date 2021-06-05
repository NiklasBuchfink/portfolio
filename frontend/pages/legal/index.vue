<template>
  <div>
    <r-grid class="legalGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="legalHeadline" span="8" span-s="2+6" span-xs="1-4">
        <h1>
          Legal Notice
        </h1>
      </r-cell>

      <r-cell class="legalContent" span="6" span-s="2+6" span-xs="1-4">
        <div v-for="content in legalpage.contentblock" :key="content.id">
          <h2>{{content.headline}}</h2>
          <p>{{content.text}}</p>
        </div>
      </r-cell>
    </r-grid>
  </div>
</template>
<script>
import { legalpageQuery } from '~/graphql/query'

export default {
  head() {
    return {
      title: 'Legal Notice',
      meta: [
        { name: 'description', content: 'Imprint of the portfolio page of Niklas Buchfink' },
      ]
    }
  },
  data() {
    return {
      legalpage: [],
    }
  },
  apollo: {
    legalpage: {
      prefetch: true,
      query: legalpageQuery,
    },
  },
}
</script>

<style lang="scss" scoped>
.legalHeadline{
  margin-top: 8rem;
}
.legalContent{
  margin-top: 4rem;
  h2 {
    margin-bottom: 1rem;
  }
  p{
    @include paragraph-large;
  }
}
</style>