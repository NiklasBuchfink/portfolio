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
  gap: 1rem;
  padding: 0.5rem 1rem;
  @include button-text;
  @include shadow-black;
  border-radius: $box-radius;
  width: auto;
  color: $color-white;
  .chatIcon {
    height: 2.25rem;
    width: 1.75rem;
    background-image: $chat;
    background-repeat: no-repeat;
    background-size: auto auto;
    background-position: center center;
  }
}
</style>
