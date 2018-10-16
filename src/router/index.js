import Vue from 'vue'
import Router from 'vue-router'
import paths from './paths'
Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: paths
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  if (authRequired && !loggedIn) {
    return next('/login')
  }
  next()
})

export default router
