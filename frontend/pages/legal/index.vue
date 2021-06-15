<template>
  <div>
    <Head title="Legal Notice" description="Imprint of the portfolio page of Niklas Buchfink" />
    <r-grid class="legalGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="legalHeadline" span="8" span-s="2+6" span-xs="1-4">
        <h1>
          Legal Notice
        </h1>
      </r-cell>
      <r-cell class="legalContent" span="8" span-s="2+6" span-xs="1-4">
        <div 
          v-if="legalpage.content" 
          v-html="$md.render(legalpage.content)"
        >
        </div>
      </r-cell>
    </r-grid>
  </div>
</template>
<script>
import { legalpageQuery } from '~/graphql/query'

export default {
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

<style lang="scss">
.legalHeadline {
  margin-top: 8rem;
}
.legalContent {
  margin-top: 4rem;
  margin-bottom: 4rem;
  h2 {
  margin-bottom: 1rem;
  }
  h3 {
    margin-top: 2rem;
  }
  p {
    @include paragraph-large;
    margin-bottom: 2rem;
  }
  a {
    text-decoration: underline;
  }
}
</style>