import Vue from 'vue'
import NProgress from 'nprogress'
import VueRouter from 'vue-router'
window.isLogin = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/index/Index.vue'),
      children: [
        {
          path: 'movie/:movieType',
          name: 'movie',
          component: () => import('../views/index/Movie.vue'),
          meta: {
            tabNumber: 0
          }
        },
        {
          path: 'cinema',
          name: 'cinema',
          component: () => import('../views/index/Cinema.vue'),
          meta: { tabNumber: 1 }
        },
        {
          path: 'account',
          name: 'account',
          component: () => import('../views/index/Account.vue'),
          children: [],
          meta: {
            mustLogin: true
          }
        },
        { path: '', redirect: '/movie/.n-hot' }
      ]
    },
    {
      path: '/detail/:movieId',
      name: 'detail',
      component: () => import('../views/canary/Detail.vue')
    },
    {
      path: '/channe/:movieId',
      name: 'channe',
      component: () => import('../views/canary/Channe.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/Index.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('../views/city/Index.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search/Index.vue')
    },
    {
      path: '/shows',
      name: 'shows',
      component: () => import('../views/shows/Index.vue')
    },
    {
      path: '*',
      redirect: '/movie/.n-hot'
    }
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
