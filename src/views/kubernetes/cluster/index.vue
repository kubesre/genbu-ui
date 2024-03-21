<template>
  <dev class="gi_page manage">
    <a-card title="集群管理">
      <a-row justify="space-between">
        <a-space wrap>
          <a-button type="primary" @click="onAdd">
            <template #icon><icon-plus /></template>
            <span>创建集群</span>
          </a-button>
          <a-button @click="refreshKubernetesCluster">
            <template #icon><icon-refresh /></template>
            <span>刷新</span>
          </a-button>
        </a-space>
      </a-row>
      <a-table
        style="margin-top: 6px"
        :data="ClusterList"
        :loading="loading"
        row-key="id"
        :columns="columns"
        :pagination="false"
      >
        <template #status="{ record }">
          <gi-dot v-if="record.status === 1" type="success"></gi-dot>
          <gi-dot v-if="record.status === 0" type="danger"></gi-dot>
        </template>
        <template #action>
          <a-space>
            <a-button type="primary" size="mini">编辑</a-button>
            <a-button type="primary" size="mini" status="danger">删除</a-button>
          </a-space>
        </template>
        <template #CreatedAt="{ record }">{{ formatDate(record.CreatedAt) }}</template>
      </a-table>
    </a-card>
  </dev>

  // 编辑添加窗口
  <a-modal
    :visible="visible"
    :modal-style="{ maxWidth: '520px' }"
    :rules="rules"
    :mask-closable="false"
    title="创建集群"
  >
    <a-form ref="formRef" :model="form" size="medium" auto-label-width :rules="rules">
      <a-form-item label="集群名称" field="name">
        <a-input v-model="form.name" placeholder="请填写集群名称" allow-clear :max-length="10" />
      </a-form-item>
      <a-form-item label="KubeConfig" field="config">
        <a-input v-model="form.config" placeholder="请填写KubeConfig" allow-clear :max-length="10" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script setup lang="ts">
import type { ClusterItem } from '@/apis/kubernetes/type'
import { getKubernetesClusterList, RefreshKubernetesCluster } from '@/apis/kubernetes'
const loading = ref(false)
const ClusterList = ref<ClusterItem[]>([])
const visible = ref(false)
const form = reactive({
  name: '',
  config: ''
})

const rules = {
  name: [
    {
      required: true,
      message: '请填写集群名称'
    }
  ],
  config: [
    {
      required: true,
      message: '请填写KubeConfig'
    }
  ]
}

const GetClusterList = async () => {
  try {
    loading.value = true
    const res = await getKubernetesClusterList()
    ClusterList.value = res.data.items
  } finally {
    loading.value = false
  }
}

// 刷新集群

const refreshKubernetesCluster = async () => {
  try {
    loading.value = true
    const data = await RefreshKubernetesCluster()
    Notification.success(data.data)
  } finally {
    loading.value = false
  }
}

const onAdd = () => {
  visible.value = true
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
GetClusterList()
const columns = [
  {
    title: '集群名称',
    dataIndex: 'name'
  },
  {
    title: '集群状态',
    dataIndex: 'status',
    slotName: 'status',
    align: 'center'
  },
  {
    title: '集群版本',
    dataIndex: 'version'
  },
  {
    title: '节点数',
    dataIndex: 'status'
  },
  {
    title: '创建时间',
    dataIndex: 'CreatedAt',
    slotName: 'CreatedAt'
  },
  {
    title: '操作',
    slotName: 'action'
  }
]
</script>
<style scoped lang="scss"></style>
