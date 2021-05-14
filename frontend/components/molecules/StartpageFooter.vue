<template>
  <div class="startpageFooter">
    <div class="footerContainer">
      <span class="footerSloganOne">Let's create</span>
      <span class="footerSloganTwo">something great!</span>
      <a>
        <div class="chatIconLg"></div>
        <span><u>hey@niklasbuchfink.de</u></span>
      </a>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.startpageFooter {
  height: calc(100vh - 3rem);
  width: 100vw;
  background-color: $color-darkgray;
  color: $color-nearlywhite;
  display: flex;
  justify-content: center;
  .footerContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100vw - 20rem);
    height: 25rem;
    padding-top: 10.625rem;
    max-width: 1440px;
    margin: 0 auto;
    span {
      @include highlight-text;
    }
    .footerSloganTwo {
      align-self: flex-end;
    }
    a {
      align-self: center;
      display: inline-flex;
      align-items: center;
      gap: 1.25rem;
      padding-top: 3.75rem;
      .chatIconLg {
        margin-top: 0.75rem;
        height: 5.125rem;
        width: 5rem;
        background-image: $chat-lg;
        background-repeat: no-repeat;
        background-size: auto auto;
        background-position: center center;
      }
      span {
      font-size: $font-size-highlight;
      font-weight: $font-weight-thin;
        u {
          text-decoration: none;
          border-bottom: 0.125rem solid $color-nearlywhite;
        }
      }
    }
  }
}
</style>
