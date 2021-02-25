import Vue from 'vue';
import App from './App.vue';
import "tailwindcss/tailwind.css";
import router from './router';
import Toasted from 'vue-toasted';
import store from './store'

Vue.use(Toasted);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
