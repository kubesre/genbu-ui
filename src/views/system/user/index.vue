<template>
  <div class="gi_page manage">
    <a-card title="用户管理">
      <a-row justify="space-between">
        <a-space wrap>
          <a-button type="primary">
            <template #icon><icon-plus /></template>
            <span>新增</span>
          </a-button>
        </a-space>
      </a-row>
      <a-table
        style="margin-top: 6px"
        row-key="id"
        :data="userList"
        :columns="columns"
        :loading="loading"
        :pagination="false"
        :bordered="{ cell: true }"
      >
        <template #status="{ record }">
          <a-tag v-if="record.status === 1" color="green">正常</a-tag>
          <a-tag v-if="record.status === 0" color="red">禁用</a-tag>
        </template>
        <template #action>
          <a-space>
            <a-button type="primary" size="mini">编辑</a-button>
            <a-button type="primary" size="mini" status="danger">删除</a-button>
          </a-space>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { getSystemUserList, type UserItem } from '@/apis'
const loading = ref(false)
const userList = ref<UserItem[]>([])
const GetUserList = async () => {
  try {
    loading.value = true
    const res = await getSystemUserList()
    userList.value = res.data.items
    console.log(userList.value)
  } finally {
    loading.value = false
  }
}
GetUserList()

const columns = [
  {
    title: '序号',
    dataIndex: 'ID'
  },
  {
    title: '用户名',
    dataIndex: 'username'
  },
  {
    title: '手机',
    dataIndex: 'phone'
  },
  {
    title: '状态',
    dataIndex: 'status',
    slotName: 'status'
  },
  {
    title: '邮箱',
    dataIndex: 'email'
  },
  {
    title: '昵称',
    dataIndex: 'nick_name'
  },
  {
    title: '创建时间',
    dataIndex: 'CreatedAt'
  },
  {
    title: '操作',
    slotName: 'action'
  }
]
</script>
