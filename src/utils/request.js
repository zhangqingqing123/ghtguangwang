// request.js
import axios from 'axios'
// 一些请求的基本配置
const service = axios.create({
  //baseURL: process.env.API_ROOT,// 接口的域名地址
  baseURL: 'http://172.29.0.172:8080/ghtccs-admin',// 接口的域名地址
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
 
// 输出方法
export default function request(url, data = {}, method = 'post') {
  return new Promise((resolve, reject) => {
    const options = {
      url,
      method
    }
    if (method.toLowerCase() === 'get') {
      options.params = data
    } else {
      options.data = data
    }
    service(options)
      .then(res => {
        console.log('返回数据', res)
        resolve(res.data)
      })
      .catch(error => {
        reject()
        console.error(error)
      })
  })
}
