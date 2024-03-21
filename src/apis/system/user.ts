import http from '@/utils/http'
import type * as System from './type'

/** @desc 获取用户数据 */
export function getSystemUserList() {
  return http.get<System.UserList>('/api/system/user/listUser')
}

/** @desc 获取用户详情 */
// export function getSystemUserDetail(params: { id: string }) {
//   return http.get<System.UserDetailResult>('/api/system/user/infoUser', params)
// }

/** @desc 保存用户 */
export function saveSystemUser(data: any) {
  return http.post<boolean>('/system/user/save', data)
}

/** @desc 删除用户 */
export function deleteSystemUser(data: { ids: string[] }) {
  return http.post<string[]>('/system/user/delete', data)
}
