import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import App from '../components/App.vue';

Vue.use(Vuex);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
