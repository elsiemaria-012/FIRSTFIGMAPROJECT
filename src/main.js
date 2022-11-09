import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueResource from 'vue-resource'
import VueResource from 'vue-router'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
