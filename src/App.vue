<template>
  <div id="my-app" class="main-wrapper">
    <Header />

    <transition name="loader-animation" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <progress-bar :show-loader="showLoader" :loader-style="loaderStyle" />
    </transition>

    <transition name="page-transition" mode="out-in" appear>
      <div class="main">
        <router-view/>
      </div>
    </transition>

    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ProgressBar from './components/ProgressBar.vue';

export default {
  data() {
    return {
      showLoader: true,
    };
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
      loadingProgress: 'loadingProgress',
    }),
    loaderStyle() {
      return `width: ${this.loadingProgress}%;`;
    },
  },
  components: {
    Header,
    Footer,
    ProgressBar,
  },
  watch: {
    // watch the value of isLoading and once it's false hide the loader
    isLoading(value) {
      if (!value) {
        setTimeout(() => {
          this.showLoader = false;
        }, 1000);
      }
    },
  },
};
</script>
