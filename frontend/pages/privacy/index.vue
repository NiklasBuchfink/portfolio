<template>
  <div>
    <r-grid class="privacyGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="privacyHeadline" span="8" span-s="2+6" span-xs="1-4">
        <h1>
          Privacy Policy
        </h1>
      </r-cell>

      <r-cell class="privacyContent" span="6" span-s="2+6" span-xs="1-4">
        <div v-for="content in privacypage.contentblock" :key="content.id">
          <h2>{{content.headline}}</h2>
          <p>{{content.text}}</p>
        </div>
      </r-cell>
    </r-grid>
  </div>
</template>
<script>
import { privacypageQuery } from '~/graphql/query'

export default {
  head() {
    return {
      title: 'Privacy',
      meta: [
        { name: 'description', content: 'Privacy Statement of the portfolio page of Niklas Buchfink' },
      ]
    }
  },
  data() {
    return {
      privacypage: [],
    }
  },
  apollo: {
    privacypage: {
      prefetch: true,
      query: privacypageQuery,
    },
  },
}
</script>

<style lang="scss" scoped>
.privacyHeadline{
  margin-top: 8rem;
}
.privacyContent{
  margin-top: 4rem;
  h2 {
    margin-bottom: 1rem;
  }
  p{
    @include paragraph-large;
  }
}
</style>