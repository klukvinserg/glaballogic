import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import Paginate from 'vuejs-paginate';
import VueRouter from 'vue-router';
import VCatalog from './components/v-catalog';
import VCatalogMovie from './components/v-catalog-movie';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.component('Paginate', Paginate);

const router = new VueRouter({
  routes: [
    { path: '/', component: VCatalog },
    { path: '*', redirect: '/' },
    { path: '/:id', component: VCatalogMovie }
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
