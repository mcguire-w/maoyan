import Vue from 'vue'
import NProgress from 'nprogress'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import Movie from '../views/index/Movie.vue'
import Cinema from '../views/index/Cinema.vue'
import Account from '../views/index/Account.vue'
import City from '../views/city/Index.vue'
import Detail from '../views/canary/Detail.vue'
import Channe from '../views/canary/Channe.vue'
import Login from '../views/login/Index.vue'
import Search from '../views/search/Index.vue'
import Shows from '../views/shows/Index.vue'
window.isLogin = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: 'movie/:movieType',
          name: 'movie',
          component: Movie,
          meta: {
            tabNumber: 0
          }
        },
        {
          path: 'cinema',
          name: 'cinema',
          component: Cinema,
          meta: { tabNumber: 1 }
        },
        {
          path: 'account',
          name: 'account',
          component: Account,
          children: [],
          meta: {
            mustLogin: true
          }
        },
        { path: '', redirect: '/movie/.n-hot' }
      ]
    },
    { path: '/detail/:movieId', name: 'detail', component: Detail },
    { path: '/channe/:movieId', name: 'channe', component: Channe },
    { path: '/login', name: 'login', component: Login },
    { path: '/city', name: 'city', component: City },
    { path: '/search', name: 'search', component: Search },
    { path: '/shows', name: 'shows', component: Shows },
    { path: '*', redirect: '/movie/.n-hot' }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.mustLogin && !window.isLogin) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  NProgress.done()
})

export default router
