export default [
  {
    path: '*',
    redirect: {
      path: '/login'
    }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      public: true
    },
    component: () => import(
      `@/pages/Login.vue`
    )
  },
  {
    path: '/',
    meta: {
      public: false
    },
    name: 'Dashboard',
    component: () => import(
      `@/pages/Dashboard.vue`
    )
  }
]
