import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import State from './views/State.vue'
import City from './views/City.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/states',
      name: 'states',
      component: State
    },
    {
      path: '/cities',
      name: 'cities',
      component: City
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
