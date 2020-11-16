<template>
  <div>
    <template v-if="post">
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="post.content.rendered"></div>
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
import axios from 'axios';
import Loader from '../components/Loader.vue';
import SETTINGS from '../settings';

export default {
  components: {
    Loader
  },
  data() {
    return {
      post: false
    };
  },
  methods: {
    getPost: function() {
      axios
        .get(
          SETTINGS.API_BASE_PATH + "posts?slug=" + this.$route.params.postSlug
        )
        .then(response => {
          this.post = response.data[0];
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  beforeMount() {
    this.getPost();
  },
};
</script>
