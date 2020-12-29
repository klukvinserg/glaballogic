<template>
  <div class="v-catalog-item card-deck">
    <div class="card">
      <p v-if="book_data.poster_path !== null">
        <img
          v-bind:src="'https://image.tmdb.org/t/p/w500' + book_data.poster_path"
          class="card-img-top"
          alt="card image"
        />
      </p>
      <p v-else>
        <img
          :src="
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/No_image_available_450_x_600.svg/450px-No_image_available_450_x_600.svg.png'
          "
          alt="img"
          class="w-100 card-img"
        />
      </p>
      <div class="card-body">
        <h5 class="card-title">{{ book_data.title }}</h5>
        <p class="card-text">Release date: {{ book_data.release_date }}</p>
      </div>
      <div class="card-footer">
        <router-link :to="'/' + book_data.id" class="btn btn-dark w-100"
          >About</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    book_data: {
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    addFavorite(event) {
      console.log(event);
    }
  }
};
</script>

<style>
</style>
