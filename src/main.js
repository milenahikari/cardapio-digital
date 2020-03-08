import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import Routes from './routes.js';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router: Routes
}).$mount('#app')
