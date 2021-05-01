<template>
  <div class="chatButton">
    <span>Get in touch</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.chatButton {
  height: 2rem;
  width: auto;
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: $box-radius;
  @include shadow-black;
  background-image: $chat;
  background-repeat: no-repeat;
  background-position: 0.5rem center;
  background-size: 1rem 0.875rem;
  padding-left: 2rem;
  color: $color-white;
  padding-top: 0.2rem;
  padding-right: 0.75rem;
}
</style>
