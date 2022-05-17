import axios from 'axios'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
axios.defaults.xsrfCookieName = 'csrftoken'

export const api = axios.create({
  // withCredentials: true,
  baseURL: ' http://201.49.62.134:8080'
})
