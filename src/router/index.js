import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import Movie from '../views/index/Movie.vue'
import Cinema from '../views/index/Cinema.vue'
import Account from '../views/index/Account.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        { path: 'movie', name: 'movie', component: Movie, },
        {
          path: 'cinema/',
          component: Cinema,
          children: [
            { path: 'movie', name: 'movie' }
          ]
        },
        { path: 'account', name: 'account', component: Account, },
        { path: '', redirect: '/movie' }
      ]
    },
    { path: '/city', name: 'city', component: City },
    { path: '*', redirect: '/movie' }
  ]
})
