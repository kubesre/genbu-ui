<template>
  <dev class="gi_page manage">
    <a-card title="命名空间">
      <a-row justify="space-between">
        <a-space wrap>
          集群环境:
          <a-select placeholder="选择集群" style="width: 180px">
            <a-option :value="1">测试环境</a-option>
            <a-option :value="0">生产环境</a-option>
          </a-select>
        </a-space>
        <a-space wrap>
          <a-button type="primary">
            <template #icon><icon-plus /></template>
            <span>创建</span>
          </a-button>
          <a-button>
            <template #icon><icon-refresh /></template>
            <span>刷新</span>
          </a-button>
        </a-space>
      </a-row>
      <a-table style="margin-top: 6px" :columns="columns" :pagination="false" :data="data">
        <template #status="{ record }">
          <gi-dot v-if="record.status === 1" type="success"></gi-dot>
          <gi-dot v-if="record.status === 0" type="danger"></gi-dot>
        </template>
        <template #label="{ record }">
          <a-space wrap>
            <a-tag v-for="(value, key, index) in record.label" :key="index" color="green" bordered
              >{{ key }}: {{ value }}</a-tag
            >
          </a-space>
        </template>
        <template #action>
          <a-space>
            <a-button type="primary" size="mini">编辑</a-button>
            <a-button type="primary" size="mini" status="danger">删除</a-button>
          </a-space>
        </template>
      </a-table>
    </a-card>
  </dev>
</template>

<script setup lang="ts">
const data = [
  {
    name: 'default',
    label: { 'kubernetes.io/metadata.name': 'default' },
    status: 1,
    CreatedAt: '2019-04-02 11:52:16'
  },
  {
    name: 'kube-public',
    label: { 'kubernetes.io/metadata.name': 'kube-public' },
    status: 1,
    CreatedAt: '2019-04-02 11:52:16'
  },
  {
    name: 'kube-system',
    label: { 'kubernetes.io/metadata.name': 'kube-system' },
    status: 1,
    CreatedAt: '2019-04-02 11:52:16'
  },
  {
    name: 'dev',
    label: { 'kubernetes.io/metadata.name': 'dev', 'kubernetes.io/metadata.env': 'dev' },
    status: 1,
    CreatedAt: '2023-03-09 15:14:14'
  }
]
const columns = [
  {
    title: '名称',
    dataIndex: 'name'
  },
  {
    title: '标签',
    label: 'label',
    slotName: 'label'
  },
  {
    title: '状态',
    dataIndex: 'status',
    slotName: 'status',
    align: 'center'
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
