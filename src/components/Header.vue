<template>
  <header class="page-header">
    <div class="page-header__content">
      <div class="page-header__logo" @click="onLogoClick">
        <Logo />
      </div>
      <Navbar class="page-header__navbar" />
    </div>
  </header>
</template>

<script>
import Logo from "@img/fitatu.svg";
import Navbar from "./Navbar";

export default {
  props: {
    onLogoClick: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    Logo,
    Navbar
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/variables";

.page-header {
  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    z-index: 11;
    height: inherit;
    width: 100%;
    background-color: $color-white;
    box-shadow: 0 0 15px $color-shadow;

    padding-left: 20px;
    padding-right: 20px;
  }

  &__logo {
    cursor: pointer;
  }
}

@media (min-width: $bp-tablet-min) {
  .page-header {
    &__content {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>