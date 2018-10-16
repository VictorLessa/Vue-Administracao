import axios from 'axios'

const login = async (credential) => {
  let config = {
    method: 'POST',
    url: `${process.env.API_URL}/pharmacy/login`,
    data: credential
  }
  return axios.request(config)
}

const getDetails = async (token) => {
  let config = {
    method: 'GET',
    url: `${process.env.API_URL}/pharmacy/details`,
    headers: {Authorization: token}
  }
  return axios.request(config)
}
export default {
  login,
  getDetails
}
