// 获取集群
export interface ClusterItem {
  id: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: number
  name: string
  cid: string
  text: string
  status: 0 | 1
  version: string
}

export interface ClusterList {
  items: ClusterItem[]
  total: number
}
