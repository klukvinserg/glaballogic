<template>
  <div class="v-catalog">
    <div class="wrapper">
      <v-catalog-item
        v-for="book in dataFromApi"
        :key="book.id"
        v-bind:book_data="book"
      />
    </div>
    <div class="mt-3">
      <b-pagination
        v-on:input="getData"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import VCatalogItem from './v-catalog-item';
import axios from 'axios';

export default {
  name: 'v-catalog',
  components: {
    VCatalogItem
  },
  data() {
    return {
      dataFromApi: null,
      rows: 0,
      perPage: 1,
      currentPage: 5
    };
  },
  methods: {
    getData(perPage) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=20e12bc17480402a0fa87fd1a61547ea&language=en-US&page=${perPage}`
        )
        .then(response => {
          this.rows = response.data.total_pages;
          console.log(response.data);
          this.dataFromApi = response.data.results;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2vw;
}

.card {
  margin: 10px;
}

.mt-3 {
  display: flex;
  justify-content: center;
}

.page-item.active .page-link {
  background-color: grey !important;
  border-color: grey !important;
}

.page-link {
  color: black !important;
}
</style>
