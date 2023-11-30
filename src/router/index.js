import Vue from 'vue'
import app from "@/App.vue"
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: app
  }
]

const router = new VueRouter({
  routes
})

export default router
