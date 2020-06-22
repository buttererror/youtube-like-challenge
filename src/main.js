import Vue from 'vue'
import App from './App.vue'
window.moment = require('moment');
import 'es6-promise/auto';
import store from './store';
import router from "./routes"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
   store,
   router
}).$mount('#app')
