// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import LogTime from './components/LogTime.vue'
import store from './store'
import TimeEntries from './components/TimeEntries'
import VueRouter from 'vue-router'
import './assets/css/bootstrap.css'

Vue.use(VueRouter);


/* eslint-disable no-new */
const routes =  [
  {
    path:'/',
    component:Home
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/time-entries',
    component:TimeEntries,
    children:[{
      path:'log-time',
      component:LogTime
    }]
  }
];
const router = new VueRouter({
  routes
});
var app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
