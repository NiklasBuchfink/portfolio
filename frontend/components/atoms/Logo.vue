<template>
  <NuxtLink to="/">
    <div class="logo"></div>
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
  background-size: 1.75rem 1.5rem;
  // object-fit: cover;
}
</style>
