import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/pages/Home.vue';

Vue.use(VueRouter);

const routers = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});

export default routers;