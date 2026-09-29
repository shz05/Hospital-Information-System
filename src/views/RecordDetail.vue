<template>
  <div class="record-detail-page">
    <el-card v-if="record" shadow="never" class="page-card">
      <template #header>
        <div class="card-header">
          <el-button link type="primary" @click="goBack">
            <el-icon><ArrowLeft /></el-icon>
            返回列表
          </el-button>
          <span class="card-title">就诊详情</span>
        </div>
      </template>

      <el-descriptions title="患者信息" :column="3" border class="detail-section">
        <el-descriptions-item label="患者姓名">{{ record.name }}</el-descriptions-item>
        <el-descriptions-item label="性别">{{ record.gender }}</el-descriptions-item>
        <el-descriptions-item label="年龄">{{ record.age }} 岁</el-descriptions-item>
      </el-descriptions>

      <el-descriptions title="就诊信息" :column="2" border class="detail-section">
        <el-descriptions-item label="就诊科室">{{ record.department }}</el-descriptions-item>
        <el-descriptions-item label="就诊时间">{{ record.visitTime }}</el-descriptions-item>
        <el-descriptions-item label="接诊医生">{{ record.doctor }}</el-descriptions-item>
      </el-descriptions>

      <el-descriptions title="诊断信息" :column="1" border class="detail-section">
        <el-descriptions-item label="主诉">{{ record.complaint }}</el-descriptions-item>
        <el-descriptions-item label="诊断结果">{{ record.diagnosis }}</el-descriptions-item>
        <el-descriptions-item label="医嘱/处方">{{ record.prescription }}</el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card v-else shadow="never" class="page-card">
      <el-empty description="未找到该就诊记录">
        <el-button type="primary" @click="goBack">返回列表</el-button>
      </el-empty>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'
import { getRecordById } from '../mock/records'

const route = useRoute()
const router = useRouter()
const record = ref(getRecordById(route.params.id))

function goBack() {
  router.push('/records')
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

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}

.detail-section + .detail-section {
  margin-top: 20px;
}
</style>
