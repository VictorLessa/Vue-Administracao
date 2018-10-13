import webapi from './webapi'

const loginUser = async ({ commit }, credential) => {
  const result = await webapi.login(credential)
  console.log(result)
}

export default {
  loginUser
}
