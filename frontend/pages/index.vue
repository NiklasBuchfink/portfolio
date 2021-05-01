<template>
  <div class="container">
    <div class="frontpageHeader">
      <div class="frontpageHeaderItem">
        <p class="name">Niklas Buchfink</p>
        <h1>Design &amp; Engineering</h1>
        <p class="frontpageText">
          I’m a user experience designer and electrical engineer with expertise in high fidelity prototyping and web development.
        </p>
        <div class="buttonWrapper">
          <ChatButton />
        </div>
      </div>
      <div class="frontpageHeaderItem">

      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.frontpageHeader {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .frontpageHeaderItem{
    width: 50%;
    .name {
      @include headline-3;
      color: rgba($rgb-darkgray , 0.7);
    }
    h1{
      margin: 1.75rem 0;
      color: $color-darkgray;
    }
    .frontpageText {
      @include paragraph-large;
      color: rgba($rgb-darkgray , 0.7);
      margin-bottom: 2.625rem;
    }
    .buttonWrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
    }
  }
}
</style>
