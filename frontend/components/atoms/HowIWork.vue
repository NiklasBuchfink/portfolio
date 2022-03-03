<template>
  <div>
    <h3>
      {{ subtitle }}
    </h3>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['subtitle', 'text'],
}
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 1rem;
}
p {
  margin-bottom: 2rem;
}
</style>
