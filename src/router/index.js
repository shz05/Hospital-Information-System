import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/records'
  },
  {
    path: '/records',
    name: 'RecordList',
    component: () => import('../views/RecordList.vue'),
    meta: { title: '就诊记录' }
  },
  {
    path: '/records/:id',
    name: 'RecordDetail',
    component: () => import('../views/RecordDetail.vue'),
    meta: { title: '就诊详情' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  document.title = `${to.meta.title} - 医院信息系统`
})

export default router
