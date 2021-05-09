<template>
  <div>
    <div class="actions">
      <div class="actions-left">
        <Logo />
      </div>
      <div class="actions-right">
        <Navigation />
      </div>
    </div>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.actions {
  position: absolute; //fixed
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: 1001;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.actions-left,
.actions-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
  padding: 2.125rem 3.375rem;
}
.actions-right {
  align-items: flex-end;
}
main {
  width: calc(100vw - 20rem);
  height: 100%;
  margin: 0 auto;
  z-index: 1002;
}
</style>
