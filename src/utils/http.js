
import axios from 'axios'
import qs from 'qs'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const httpHandler = axios.create({
  timeout: 10e3,
  baseURL: '/',
  transformRequest: data => {
    data = typeof data === 'string' ? data : qs.stringify(data)
    return data
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// request拦截器
httpHandler.interceptors.request.use(
  config => {
    NProgress.start()
    return config
  },
  error => {
    NProgress.done()
    Promise.reject(error)
  }
)


// response 拦截器
httpHandler.interceptors.response.use(
  response => {
    NProgress.done()
    /* 如果访问成功，那么返回访问结果 */
    const data = response.data
    return Promise.resolve(data)
  },
  error => {
    NProgress.done()
    /** 如果访问发生异常，那么进行异常的处理 */
    // var res = error.response
    // const originalRequest = res.config
    return Promise.reject(error)
  }
)


export default httpHandler
