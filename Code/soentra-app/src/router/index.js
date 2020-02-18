import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EnviromentPlayer from '../views/EnviromentPlayer.vue'
import AddEnviroment from '../views/AddEnviroment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/player/:enviroment/:index',
    name: 'Player',
    component: EnviromentPlayer
  },
  {
    path: '/add-enviroment',
    name: 'Add Enviroment',
    component: AddEnviroment
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history', //Gets rid of unsightly /#/ in url
  routes
})

export default router
