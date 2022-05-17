import axios from 'axios'
import { api } from './api'

export async function getApiAuth() {
  try {
    const res = await api.get('http://201.49.62.134:8080/api-auth/login/', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: {
        username: 'victorprnt',
        password: '=-rq{Xw,3K2Xynsl5cVu'
      }
    })
    // console.log(status)
    console.log(res.config.headers)
    return res
  } catch (error) {
    console.error(error)
  }
}

export async function postApiAuth() {
  try {
    const res = await api.post(
      '/api-auth/login/',
      {},
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
          username: 'victorprnt',
          password: '=-rq{Xw,3K2Xynsl5cVu'
        }
      }
    )
    console.log(res)
    return res
  } catch (error) {
    console.error(error)
  }
}
