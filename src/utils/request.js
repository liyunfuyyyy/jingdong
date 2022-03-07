import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jddpi.liyunfu.xyz',
  timeout: 10000,
  withCredentials: true
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((res) => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}

export const patch = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.patch(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}
