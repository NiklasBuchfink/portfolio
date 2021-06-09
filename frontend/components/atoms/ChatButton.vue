<template>
  <div class="chatButton">
    <div class="chatIcon"></div>
    <span>Get in touch</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.chatButton {
  display: inline-flex;
  @supports (gap: 1rem) {
    gap: 1rem;
  }
  padding: 0.75rem 1rem;
  @include button-text;
  @include shadow-black;
  border-radius: $box-radius;
  width: auto;
  color: $color-white;
  .chatIcon {
    margin-right: 1rem;
    @supports (gap: 1rem) {
      margin-right: 0;
    }
    height: 2rem;
    width: 2rem;
    background-image: $chat;
    background-repeat: no-repeat;
    background-size: auto auto;
    background-position: center center;
  }
}
</style>
