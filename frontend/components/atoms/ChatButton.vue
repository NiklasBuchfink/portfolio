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
  padding: 0.75rem 1rem;
  @include button-text;
  @include shadow-black;
  border-radius: $box-radius;
  width: auto;
  color: $color-white;
  transition: 0.3s;
  .chatIcon {
    margin-right: 1rem;
    height: 2rem;
    width: 2rem;
    background-image: $chat;
    background-repeat: no-repeat;
    background-size: auto auto;
    background-position: center center;
  }
}
.chatButton:hover {
  opacity: 0.9;
}
</style>
