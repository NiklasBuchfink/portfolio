<template>
  <div>
    <main>
      <div class="actions">
        <div class="actions-left">
          <Logo />
        </div>
        <div class="actions-right">
          <Navigation
            :link="'/'"
          >
            Projects
          </Navigation>
        </div>
      </div>
      <Nuxt class="slot" />
    </main>
    <Footer class="smallFooter"/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.slot {
  position: relative;
  z-index: 1010;
  height: 100%;
  width: 100%;
}
.actions {
  position: fixed; //fixed
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  z-index: 1000;
}
.actions-left,
.actions-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
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
  @media screen and (max-width: $max_width_s) {
    width: calc(100vw - 6.75rem);
  }
  @media screen and (max-width: $max_width_xs) {
    width: calc(100vw - 4rem);
  }
}
.smallFooter {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
