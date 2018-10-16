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
    redirect: {
      path: '/dashboard'
    },
    name: 'Root'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      public: false
    },
    component: () => import(
      `@/pages/Dashboard.vue`
    )
  }
]
