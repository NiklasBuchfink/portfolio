<template>
  <nav class="navigation">
    <ul>
      <li>
        <NuxtLink to="/projects">
          <p>Projects</p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          <p>About</p>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navigation {
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    li {
      margin-bottom: 0.5rem;
      p {
        @include menu;
        text-align: right;
      }
    }
  }
}
</style>
