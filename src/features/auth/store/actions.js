import webapi from './webapi'
import router from '@/router'
const loginUser = async ({ commit }, credential) => {
  await webapi.login(credential)
    .then(
      user => {
        webapi.getDetails(user.data.data)
          .then(
            details => {
              commit('DETAILS_PHARMACY', details)
            },
            error => {
              localStorage.removeItem('user')
              console.log(error)
              router.push('/')
            }
          )
        commit('LOGIN_USER', user.data)
        localStorage.setItem('user', JSON.stringify('OK'))
        router.push('/')
      },
      error => {
        if (error.response.status === 401) {
          commit('ALERT_LOGIN', error.response.data.message)
        } else if (error.response.status === 500) {
          commit('ALERT_LOGIN', error.response.data.message)
        }
      }
    )
}

export default {
  loginUser
}
