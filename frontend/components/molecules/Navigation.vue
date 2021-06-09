<template>
  <nav class="navigation">
    <ul>
      <li>
        <NuxtLink :to="link">
          <slot></slot>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props:
  [
    'link',
  ],
}
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
      @include menu;
      text-align: right;
      transition: 0.3s;
    }
    li:hover {
      opacity: 0.7;
    }
  }
}
</style>
