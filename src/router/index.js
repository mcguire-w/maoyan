import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import Movie from '../views/index/Movie.vue'
import Cinema from '../views/index/Cinema.vue'
import Account from '../views/index/Account.vue'
import City from '../views/city/Index.vue'
import Detail from '../views/canary/Detail.vue'
import Channe from '../views/canary/Channe.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '',
      component: Index,
      children: [
        { path: 'movie/:movieType', name: 'movie', component: Movie, meta: { tabNumber: 0 } },
        {
          path: 'cinema',
          name: 'cinema',
          component: Cinema,
          children: [
            { path: '/detail', name: 'detail', component: Detail },
            { path: '/channe', name: 'channe', component: Channe }
          ],
          meta: { tabNumber: 1 }
        },
        { path: 'account', name: 'account', component: Account, meta: { tabNumber: 2 } },
        { path: '', redirect: '/movie/.n-hot' }
      ]
    },
    { path: '/city', name: 'city', component: City },
    { path: '*', redirect: '/movie/.n-hot' }
  ]
})

export default router
