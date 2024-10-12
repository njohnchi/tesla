<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from '@/components/layout/SideBar.vue'
</script>

<template>
  <div class="container">
    <SideBar />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  background-color: #e5e7eb;
  display: flex;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  overflow-y: auto;
  padding-bottom: 60px;
}
</style>
