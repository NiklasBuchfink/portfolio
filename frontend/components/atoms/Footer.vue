<template>
  <div class="footer">
    <div class="copyright">2021 © Niklas Buchfink</div>
    <div class="socialmediaLinks">
      <a href="https://www.linkedin.com/in/niklas-buchfink/" class="linkedIn">LinkedIn</a>
      <a href="" class="twitter">Twitter</a>
      <a href="" class="gitlab">GitLab</a>
    </div>
    <div class="lawLinks">
      <NuxtLink to="/legal">Legal</NuxtLink>
      <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.footer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0rem 3.375rem;
  background-color: $color-darkgray;
  @include footer-text;
  color: $color-lightgray;
  .socialmediaLinks {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .lawLinks {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
}
</style>
