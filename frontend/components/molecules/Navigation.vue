<template>
  <nav class="navigation">
    <ul>
      <li>
        <nuxt-link to="/projects">
          <p>Projects</p>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">
          <p>About</p>
        </nuxt-link>
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
