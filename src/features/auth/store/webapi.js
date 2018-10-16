import axios from 'axios'

const login = async (credential) => {
  let config = {
    method: 'POST',
    url: `${process.env.API_URL}/pharmacy/login`,
    data: credential
  }
  return axios.request(config)
}

export default {
  login
}
