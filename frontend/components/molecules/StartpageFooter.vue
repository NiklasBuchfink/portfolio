<template>
  <div class="startpageFooter">
    <div class="footerContainer">
      <span class="footerSloganOne">Let's create</span>
      <span class="footerSloganTwo">something great!</span>
      <a href="mailto:hey@niklasbuchfink.com">
        <div class="chatIconLg"></div>
        <span><u>hey@niklasbuchfink.com</u></span>
      </a>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.startpageFooter {
  height: calc(100vh - 3rem);
  width: 100%;
  background-color: $color-darkgray;
  color: $color-nearlywhite;
  display: flex;
  justify-content: center;
  @media screen and (max-width: $max_width_xs) {
    height: calc(100vh - 8rem);
    align-items: flex-start;
  }
  .footerContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100vw - 20rem);
    height: 25rem;
    max-width: 1440px;
    margin: auto auto;
    @media screen and (min-width: $max_width) {
      width: calc(90rem - 20rem);
    }
    @media screen and (max-width: $max_width_s) {
      width: calc(100vw - 6.75rem);
    }
    @media screen and (max-width: $max_width_xs) {
      width: calc(100vw - 4rem);
    }
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
      margin-top: 3.75rem;
      transition: 0.3s;
      @media screen and (max-width: $max_width_xs) {
        flex-direction: column;
      }
      .chatIconLg {
        display: inline-block;
        mask-image: $chat-lg;
        background-color: $color-white;
        mask-repeat: no-repeat;
        mask-size: contain;
        margin-top: 1.25rem;
        height: 5rem;
        width: 5rem;
        padding: 0.75rem;
        margin-right: 1.25rem;
        @media screen and (max-width: $max_width_xs) {
          margin-right: 0;
          margin-bottom: 1.25rem;
        }
        @media screen and (max-width: $max_width_s) {
          height: 3.25rem;
          width: 3.25rem;
        }
      }
      span {
        @include highlight-text;
        font-weight: $font-weight-thin;
        @media screen and (max-width: $max_width_s) {
          font-size: 3rem;
        }
        @media screen and (max-width: $max_width_xs) {
          font-size: 2.5rem;
        }
        @media screen and (max-width: $max_width_xxs) {
          font-size: 2rem;
        }
        u {
          text-decoration: none;
          border-bottom: 0.125rem solid $color-nearlywhite;
        }
      }
    }
    a:hover {
      opacity: 0.5;
    }
  }
}
</style>
