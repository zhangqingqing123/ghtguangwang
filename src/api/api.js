// api.js
import request from '../utils/request'
 
const api= {
  // 接口1
  login(data) {
      return request('/api/site/info', data)
  },
  // 接口2
  logout(data) {
   // return request('user/logout', data)
  }
}
 
export default api
