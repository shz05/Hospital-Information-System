<template>
  <div class="record-list-page">
    <el-card shadow="never" class="page-card">
      <template #header>
        <div class="card-header">
          <span class="card-title">就诊记录</span>
          <span class="card-subtitle">共 {{ filteredRecords.length }} 条记录</span>
          <el-input
            v-model="keyword"
            class="search-input"
            placeholder="搜索患者姓名 / 科室 / 诊断"
            clearable
            :prefix-icon="Search"
          />
        </div>
      </template>

      <el-table
        :data="filteredRecords"
        border
        stripe
        style="width: 100%"
        empty-text="未找到相关就诊记录"
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
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { getAllRecords } from '../mock/records'

const router = useRouter()
const records = ref(getAllRecords())
const keyword = ref('')

const filteredRecords = computed(() => {
  const kw = keyword.value.trim()
  if (!kw) return records.value
  return records.value.filter(
    (item) =>
      item.name.includes(kw) ||
      item.department.includes(kw) ||
      item.diagnosis.includes(kw)
  )
})

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
  align-items: center;
  gap: 12px;
}

.search-input {
  width: 280px;
  margin-left: auto;
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
