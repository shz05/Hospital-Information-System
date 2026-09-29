<template>
  <div class="app-shell">
    <header class="app-header">
      <div class="header-inner">
        <span class="logo">HIS</span>
        <h1 class="title">医院信息系统</h1>
      </div>
    </header>
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  background-color: #f0f2f5;
}

.app-header {
  height: 56px;
  background-color: #2b5f8a;
  color: #fff;
  display: flex;
  align-items: center;
}

.header-inner {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
}

.title {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
}

.app-main {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 24px 40px;
  box-sizing: border-box;
}
</style>
