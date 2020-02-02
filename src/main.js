import Vue from 'vue'
import App from './App.vue'
window.moment = require('moment');
import 'es6-promise/auto';
import store from './store';
import 'axios-progress-bar/dist/nprogress.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
   store
}).$mount('#app')
