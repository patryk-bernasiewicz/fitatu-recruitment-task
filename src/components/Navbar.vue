<template>
  <div :class="{ 'navbar': true, 'navbar--visible': open }">
    <Hamburger v-on:click="toggle" v-bind:open="open" class="navbar__toggle" />
    <div class="navbar__wrapper">
      <nav class="navbar__content">
        <ul class="navbar__list">
          <li>
            <a href="javascript:void(0);">Home</a>
          </li>
          <li>
            <a href="javascript:void(0);">About</a>
          </li>
          <li>
            <a href="javascript:void(0);">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Hamburger from "./Hamburger";

export default {
  components: {
    Hamburger
  },
  data: function() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      console.log("toggle");
      this.open = !this.open;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/_variables";

.navbar {
  &__toggle {
    display: none;
  }

  &__list {
    margin: 0;
    list-style-type: none;

    a {
      color: $color-content;
      font-size: 13px;
      font-weight: 900;
      display: block;
      padding: 6px;
    }
  }
}

@media (max-width: $bp-mobile-max) {
  .navbar {
    &__toggle {
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      .navbar--visible & {
        position: absolute;
        top: 10px;
        right: 20px;
        z-index: 101;
      }
    }

    &__wrapper {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba($color-background, 0.9);

      visibility: hidden;
      opacity: 0;
      pointer-events: none;
      z-index: -1;

      transition: all $transition;

      .navbar--visible & {
        visibility: visible;
        opacity: 1;
        pointer-events: all;
        z-index: 100;
      }
    }

    &__content {
      background: $color-white;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      max-width: 300px;
      box-shadow: $shadow;

      transform: translateX(-100%);

      transition: transform $transition-fast;

      .navbar--visible & {
        transform: translateX(0%);
      }
    }

    &__list {
      padding: 20px;
      margin: 0;

      a {
        font-size: 18px;
      }
    }
  }
}

@media (min-width: $bp-tablet-min) {
  .navbar {
    &__list {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 0;

      a {
        padding: 8px 16px;
      }
    }
  }
}
</style>
