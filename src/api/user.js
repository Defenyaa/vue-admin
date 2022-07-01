import http from '@/utils/request'

// 登录
export async function login(parms){
  return await http.login("/api/user/login",parms);
}

export async function getInfo(){
  return await http.get("/api/sysUser/getInfo", null)
}

export async function getMenuList(){
  return await http.get("/api/sysUser/getMenuList",null)
}

// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

// // 获取用户信息
// export function getInfo(token) {
//   return request({
//     url: '/vue-element-admin/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-element-admin/user/logout',
//     method: 'post'
//   })
// }
