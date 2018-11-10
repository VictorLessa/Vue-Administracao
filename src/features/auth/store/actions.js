import webapi from './webapi'
// import router from '@/router'
const loginUser = async ({ commit }, credential) => {
  try {
    return await webapi.login(credential)
      .then(
        user => {
          webapi.getDetails(user.data.data)
            .then(
              details => {
                commit('DETAILS_PHARMACY', details.data.data)
              }
            )
          commit('LOGIN_USER', user.data.data)
          return user
        }
      )
  } catch (error) {
    commit('ALERT_LOGIN', error.response.data.message)
  }
}

const getDetails = async ({ commit }, token) => {
  try {
    return await webapi.getDetails(token)
      .then(
        details => {
          commit('DETAILS_PHARMACY', details.data.data)
          return details
        }
      )
  } catch (error) {
    console.log(error)
  }
}

const saveDetails = ({ commit }, details) => {
  commit('DETAILS_PHARMACY', details)
}

export default {
  loginUser,
  saveDetails,
  getDetails
}
