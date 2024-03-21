<template>
  <dev class="gi_page manage">
    <a-card title="工作负载">
      <a-row justify="space-between">
        <a-space wrap>
          集群环境:
          <a-select placeholder="选择集群" style="width: 180px">
            <a-option :value="1">测试环境</a-option>
            <a-option :value="0">生产环境</a-option>
          </a-select>
          命名空间:
          <a-select placeholder="选择命名空间" style="width: 180px">
            <a-option :value="1">dev</a-option>
            <a-option :value="0">default</a-option>
          </a-select>
        </a-space>
      </a-row>
      <a-tabs default-active-key="2" :position="pagination" show-page-size>
        <a-tab-pane key="1" title="无状态"> Content of Tab Panel 1 </a-tab-pane>
        <a-tab-pane key="2" title="有状态"> Content of Tab Panel 1 </a-tab-pane>
        <a-tab-pane key="3" title="守护进程集"> Content of Tab Panel 1 </a-tab-pane>
        <a-tab-pane key="4" title="任务"> Content of Tab Panel 1 </a-tab-pane>
        <a-tab-pane key="5" title="定时任务"> Content of Tab Panel 1 </a-tab-pane>
        <a-tab-pane key="6" title="容器组">
          <a-table style="margin-top: 6px" :columns="columns" :data="data">
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
              <a-space direction="vertical">
                <a-space>
                  <a-button type="text" size="mini">详情</a-button>
                  <a-button type="text" size="mini">编辑</a-button>
                </a-space>
                <a-space>
                  <a-button type="text" size="mini">日志</a-button>
                  <a-dropdown position="bottom">
                    <a-button type="text" size="mini"
                      >更多
                      <a-button type="text">
                        <template #icon>
                          <icon-down />
                        </template>
                      </a-button>
                    </a-button>

                    <template #content>
                      <a-doption>终端</a-doption>
                      <a-doption>删除</a-doption>
                    </template>
                  </a-dropdown>
                </a-space>
              </a-space>
            </template>
          </a-table>
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </dev>
</template>
<style scoped lang="scss"></style>
<script setup lang="ts">
const pagination = { total: 50, size: 10 }
const columns = [
  {
    title: '名称',
    dataIndex: 'name'
  },
  {
    title: '标签',
    dataIndex: 'label',
    slotName: 'label'
  },
  {
    title: '状态',
    dataIndex: 'status',
    slotName: 'status',
    align: 'center'
  },
  {
    title: '重启次数',
    dataIndex: 'RestartCount'
  },
  {
    title: 'Pod IP',
    dataIndex: 'PodIP'
  },
  {
    title: '工作节点',
    dataIndex: 'node'
  },
  {
    title: '创建时间',
    dataIndex: 'CreatedAt'
  },
  {
    title: 'CPU',
    dataIndex: 'CPU'
  },
  {
    title: '内存',
    dataIndex: 'Memory'
  },
  {
    title: '操作',
    slotName: 'action'
  }
]

const data = [
  {
    name: 'nginx-565698774-2dx85',
    label: { app: 'nginx', 'pod-template-hash': '5d59d67564' },
    status: 1,
    RestartCount: 0,
    PodIP: '172.28.4.66',
    node: '10.0.53.52',
    CreatedAt: '2023-07-17 15:32:45',
    Memory: '1.352 Mi',
    CPU: '0'
  }
]
</script>
