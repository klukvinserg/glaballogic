<template>
  <div class="v-main-wrapper container">
    <nav class="navbar navbar-dark bg-dark mb-2">
      <div class="container-fluid">
        <a class="navbar-brand">SPA</a>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'v-main-wrapper'
};
</script>

<style></style>
