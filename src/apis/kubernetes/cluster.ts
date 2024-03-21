import http from '@/utils/http'
import type * as kubernetes from './type'

/** @desc 获取集群列表数据 */
export function getKubernetesClusterList() {
  return http.get<kubernetes.ClusterList>('/api/kubernetes/cluster/getClusterList')
}

/** @desc 刷新集群 */
export function RefreshKubernetesCluster() {
  return http.post<kubernetes.ClusterList>('/api/kubernetes/cluster/refreshCluster')
}
