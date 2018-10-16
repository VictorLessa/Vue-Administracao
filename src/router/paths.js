export default [
  {
    path: '*',
    redirect: '/'
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
    name: 'Root',
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(
      `@/pages/Dashboard.vue`
    )
  }
]
