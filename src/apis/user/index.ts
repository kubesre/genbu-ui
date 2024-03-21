import http from '@/utils/http'
import type * as User from './type'
import type { MenuItem } from '@/apis/system/type'

/** @desc 登录 */
export function login(data: { username: string; password: string }) {
  return http.post<User.LoginRes>('/api/base/user/login', data)
}

/** @desc 退出登录 */
export function logout() {
  return http.post('/api/system/user/logout')
}

/** @desc 获取用户信息 */
export const getUserInfo = () => {
  return http.get<User.UserInfo>('/api/system/user/getUserInfo')
}

/** @desc 获取用户路由信息 */
export const getUserAsyncRoutes = () => {
  return http.get<MenuItem[]>('/api/system/menu/getMenuList')
}
