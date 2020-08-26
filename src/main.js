import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/routes';
import './assets/scss/saludya.scss';
import VueRouter from 'vue-router';
import jQuery from "jquery";
Vue.use(VueRouter);
const $ = jQuery;
window.$ = $;

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
