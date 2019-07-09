<template>
  <div class="app">
    <Header />
    <div class="pages-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@components/Header";
import Footer from "@components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss" scoped>
.app {
  position: relative;
  height: 100%;
}

.pages-container {
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 100px;
}
</style>