<template>
  <button
    type="button"
    :class="{ 'hamburger': true, 'hamburger--open': open }"
    v-on:click="$emit('click')"
  >
    <span class="hamburger__dash"></span>
    <span class="hamburger__dash"></span>
    <span class="hamburger__dash"></span>
  </button>
</template>

<script>
export default {
  props: ["open"]
};
</script>

<style lang="scss" scoped>
@import "~styles/variables";

.hamburger {
  width: $navbar-mobile-height * 0.75;
  height: $navbar-mobile-height * 0.75;

  background: $color-background;
  border: 2px solid rgba($color-content, 0.1);
  border-radius: 4px;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__dash {
    width: $navbar-mobile-height * 0.35;
    height: 3px;
    background: $color-content;

    position: relative;

    transform-origin: center;
    transition: transform $transition-fast;

    &:nth-child(1) {
      transform: translateY(-6px);
      top: 3px;
    }

    &:nth-child(2) {
      transform: scaleX(1);
    }

    &:nth-child(3) {
      transform: translateY(6px);
      bottom: 3px;
    }

    .hamburger--open & {
      &:nth-child(1) {
        transform: translateY(0px) rotate(-135deg);
      }
      &:nth-child(2) {
        transform: scaleX(0);
      }
      &:nth-child(3) {
        transform: translateY(0px) rotate(135deg);
      }
    }
  }
}
</style>
