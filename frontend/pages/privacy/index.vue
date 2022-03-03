<template>
  <div>
    <Head
      title="Privacy Policy"
      description="Privacy Statement of the portfolio page of Niklas Buchfink"
    />
    <r-grid class="privacyGrid" columns="12" columns-s="8" columns-xs="4">
      <r-cell class="privacyHeadline" span="8" span-s="2+6" span-xs="1-4">
        <h1>Privacy Policy</h1>
      </r-cell>

      <r-cell class="privacyContent" span="8" span-s="2+6" span-xs="1-4">
        <div
          v-if="privacypage.content"
          v-html="$md.render(privacypage.content)"
        ></div>
      </r-cell>
    </r-grid>
  </div>
</template>
<script>
import { privacypageQuery } from '~/graphql/query'

export default {
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

<style lang="scss">
.privacyHeadline {
  margin-top: 8rem;
}
.privacyContent {
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
