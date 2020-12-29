<template>
  <div class="v-catalog-movie">
    <div class="card mb-3">
      <p v-if="backdrop_path !== null">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + backdrop_path"
          alt="img"
          class="w-100 card-img"
        />
      </p>
      <p v-else>
        <img
          :src="
            'https://timeoutcomputers.com.au/wp-content/uploads/2016/12/noimage.jpg'
          "
          alt="img"
          class="w-100 card-img"
        />
      </p>
      <div class="card-body">
        <h2 class="card-title">{{ original_title }}</h2>
        <p class="card-text">{{ overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'v-catalog-movie',
  components: {},
  props: {},
  data() {
    return {
      id: +this.$route.params['id'],
      dataFromApi: null,
      backdrop_path: null,
      original_title: null,
      overview: null
    };
  },

  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${+this.$route.params['id']}?api_key=20e12bc17480402a0fa87fd1a61547ea&language=en-US`
      )
      .then(response => {
        this.dataFromApi = response.data;
        this.original_title = response.data.original_title;
        this.backdrop_path = response.data.backdrop_path;
        console.log(response.data);
        this.overview = response.data.overview;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style></style>
