import axios from 'axios'

const login = async (credential) => {
  let config = {
    method: 'POST',
    url: 'http://207.246.115.47:8081/api/1.0.0/pharmacy/login',
    data: credential
  }
  return axios.request(config)
}

export default {
  login
}
