const records = [
  {
    id: 1,
    name: '张建国',
    gender: '男',
    age: 52,
    department: '心血管内科',
    doctor: '刘志强',
    visitTime: '2026-09-28 09:15',
    complaint: '反复胸闷、心悸 3 天，活动后加重',
    diagnosis: '冠状动脉粥样硬化性心脏病',
    prescription: '阿司匹林肠溶片 100mg 每日一次；阿托伐他汀钙片 20mg 每晚一次；低盐低脂饮食，定期复查心电图。'
  },
  {
    id: 2,
    name: '李晓芳',
    gender: '女',
    age: 35,
    department: '呼吸内科',
    doctor: '王秀兰',
    visitTime: '2026-09-28 10:40',
    complaint: '咳嗽、咳痰伴发热 2 天，体温最高 38.5℃',
    diagnosis: '急性支气管炎',
    prescription: '头孢克肟胶囊 0.1g 每日两次；复方甘草合剂 10ml 每日三次；多饮水，注意休息。'
  },
  {
    id: 3,
    name: '王梓涵',
    gender: '女',
    age: 7,
    department: '儿科',
    doctor: '陈立峰',
    visitTime: '2026-09-27 14:20',
    complaint: '发热伴咽痛 1 天，食欲减退',
    diagnosis: '急性扁桃体炎',
    prescription: '蒲地蓝消炎口服液 10ml 每日三次；体温超过 38.5℃ 时服用布洛芬混悬液；清淡饮食。'
  },
  {
    id: 4,
    name: '赵德海',
    gender: '男',
    age: 63,
    department: '骨科',
    doctor: '孙永康',
    visitTime: '2026-09-27 11:05',
    complaint: '右膝关节疼痛伴活动受限 1 周',
    diagnosis: '右膝骨性关节炎',
    prescription: '硫酸氨基葡萄糖胶囊 0.5g 每日三次；局部热敷；避免长时间负重行走，两周后复诊。'
  },
  {
    id: 5,
    name: '钱丽华',
    gender: '女',
    age: 45,
    department: '消化内科',
    doctor: '周慧敏',
    visitTime: '2026-09-26 16:30',
    complaint: '上腹部隐痛、反酸 5 天，进食后加重',
    diagnosis: '慢性胃炎',
    prescription: '奥美拉唑肠溶胶囊 20mg 每日两次；铝碳酸镁片 0.5g 每日三次；忌辛辣刺激食物。'
  },
  {
    id: 6,
    name: '孙志远',
    gender: '男',
    age: 29,
    department: '普外科',
    doctor: '吴国栋',
    visitTime: '2026-09-26 09:50',
    complaint: '右下腹疼痛伴恶心 1 天',
    diagnosis: '急性阑尾炎',
    prescription: '收治入院，完善血常规及腹部彩超检查，拟急诊行阑尾切除术。'
  },
  {
    id: 7,
    name: '周雨桐',
    gender: '女',
    age: 26,
    department: '妇产科',
    doctor: '郑雅静',
    visitTime: '2026-09-25 15:10',
    complaint: '停经 42 天，自测尿妊娠试验阳性',
    diagnosis: '早孕',
    prescription: '叶酸片 0.4mg 每日一次；完善早孕 B 超检查；定期产检。'
  },
  {
    id: 8,
    name: '吴永强',
    gender: '男',
    age: 58,
    department: '内分泌科',
    doctor: '何玉梅',
    visitTime: '2026-09-25 08:45',
    complaint: '多饮、多尿、体重下降 1 月',
    diagnosis: '2 型糖尿病',
    prescription: '二甲双胍片 0.5g 每日两次；控制饮食，适量运动；每周监测空腹及餐后血糖。'
  },
  {
    id: 9,
    name: '郑海燕',
    gender: '女',
    age: 48,
    department: '皮肤科',
    doctor: '马文斌',
    visitTime: '2026-09-24 13:35',
    complaint: '全身散在皮疹伴瘙痒 3 天',
    diagnosis: '荨麻疹',
    prescription: '氯雷他定片 10mg 每日一次；炉甘石洗剂外用；避免接触可疑过敏原。'
  },
  {
    id: 10,
    name: '冯天佑',
    gender: '男',
    age: 71,
    department: '神经内科',
    doctor: '蒋思远',
    visitTime: '2026-09-24 10:20',
    complaint: '头晕、行走不稳 2 天，伴左侧肢体麻木',
    diagnosis: '脑供血不足',
    prescription: '银杏叶片 2 片每日三次；完善头颅 CT 及颈动脉超声检查；低盐低脂饮食。'
  }
]

export function getAllRecords() {
  return records
}

export function getRecordById(id) {
  return records.find((item) => item.id === Number(id))
}
