<template>
  <div>
    <main>
      <div class="actions">
        <div class="actions-left">
          <Logo />
        </div>
        <div class="actions-right">
          <Navigation :link="'/'"> Projects </Navigation>
        </div>
      </div>
      <Nuxt class="slot" />
    </main>
    <Footer class="smallFooter" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.slot {
  position: relative;
  z-index: 1000;
  height: 100%;
  width: 100%;
}
.actions-left {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  padding: 2.125rem 3.375rem;
  @media screen and (max-width: $max_width_s) {
    padding: 2rem;
  }
}
.actions-right {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1001;
  padding: 2.125rem 3.375rem;
  @media screen and (max-width: $max_width_s) {
    padding: 2rem;
  }
}
.actions-right {
  align-items: flex-end;
}
main {
  width: calc(100vw - 20rem);
  height: 100%;
  margin: 0 auto;
  @media screen and (min-width: $max_width) {
    width: calc(90rem - 20rem);
  }
  @media screen and (max-width: $max_width_s) {
    width: calc(100vw - 4rem);
  }
}
</style>
