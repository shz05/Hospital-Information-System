<template>
  <div class="record-list-page">
    <el-card shadow="never" class="page-card">
      <template #header>
        <div class="card-header">
          <span class="card-title">就诊记录</span>
          <span class="card-subtitle">共 {{ records.length }} 条记录</span>
        </div>
      </template>

      <el-table
        :data="records"
        border
        stripe
        style="width: 100%"
        empty-text="暂无就诊记录"
        @row-click="handleRowClick"
      >
        <el-table-column prop="name" label="患者姓名" min-width="120" />
        <el-table-column prop="department" label="就诊科室" min-width="140" />
        <el-table-column prop="diagnosis" label="诊断结果" min-width="260" show-overflow-tooltip />
        <el-table-column prop="visitTime" label="就诊时间" min-width="170" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAllRecords } from '../mock/records'

const router = useRouter()
const records = ref(getAllRecords())

function handleRowClick(row) {
  router.push(`/records/${row.id}`)
}
</script>

<style scoped>
.page-card {
  border-radius: 4px;
}

.card-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}

.card-subtitle {
  font-size: 13px;
  color: #909399;
}

:deep(.el-table__row) {
  cursor: pointer;
}
</style>
