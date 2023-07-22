<template>
  <NuxtLink to="/">
    <div class="logo" title="Logo"></div>
  </NuxtLink>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.logo {
  height: 3rem;
  width: 3rem;
  border-radius: $box-radius;
  @include shadow-black;
  background-image: $logo-white;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 1.75rem, auto;
  transition: 0.3s;
}
.logo:hover {
  opacity: 0.8;
}
</style>
