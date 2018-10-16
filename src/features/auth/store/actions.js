import webapi from './webapi'
import router from '@/router'
const loginUser = async ({ commit }, credential) => {
  await webapi.login(credential)
  router.push('/dashboard')
}

export default {
  loginUser
}
