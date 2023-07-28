import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Edit from './pages/EditJSON.vue';
import Machine from './pages/Machine.vue';
import App from './App.vue';
import store from './data/store';

const routes = [
  {
    path: '/Tiffauges/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/Tiffauges/machine/:name',
    name: 'Machine',
    component: Machine
  }, 
  {
    path: '/Tiffauges/',
    name: 'Home',
    component: Home
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');