<template>
  <div class="footer">
    <div class="copyright">2021 © Niklas Buchfink</div>
    <div class="socialmediaLinks">
      <a
        href="https://www.linkedin.com/in/niklas-buchfink/"
        target="blank"
        rel="noopener noreferrer"
        class="linkedIn"
        >LinkedIn</a
      >
      <a
        href="https://twitter.com/NBuchfink"
        target="blank"
        rel="noopener noreferrer"
        class="twitter"
        >Twitter</a
      >
    </div>
    <div class="lawLinks">
      <NuxtLink to="/legal" class="legal">Legal</NuxtLink>
      <NuxtLink to="/privacy" class="privacy">Privacy Policy</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  padding: 0rem 3.375rem;
  background-color: $color-darkgray;
  @include footer-text;
  color: $color-lightgray;
  @media screen and (max-width: $max_width_s) {
    padding: 0rem 2rem;
  }
  @media screen and (max-width: $max_width_xs) {
    flex-direction: column;
    align-items: flex-start;
    height: 8rem;
    padding: 1rem 2rem;
  }
  .copyright {
    @media screen and (max-width: $max_width_xs) {
      order: 3;
    }
  }
  .socialmediaLinks {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: $max_width_xs) {
      order: 1;
    }
    .linkedIn {
      margin-right: 2rem;
      @media screen and (max-width: $max_width_xs) {
        margin-right: 1rem;
      }
    }
    *:hover {
      text-decoration: underline;
    }
  }
  .lawLinks {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: $max_width_xs) {
      order: 2;
    }
    .legal {
      margin-right: 2rem;
      @media screen and (max-width: $max_width_xs) {
        margin-right: 1rem;
      }
    }
    *:hover {
      text-decoration: underline;
    }
  }
}
</style>
