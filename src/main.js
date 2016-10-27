import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Apps from "./pages/Apps"

Vue.use(VueRouter);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { 
  	App,
  	Home
  },
  router : new VueRouter({
  	mode : "history",
  	routes : [
  		{
  			path : '/',
        redirect : "/home"
  		},
      {
        path : '/home',
        component : Home
      },
      {
        path : '/collections',
        component : Collection
      },
      {
        path : '/apps',
        component : Apps
      }
  	]
  })
});
