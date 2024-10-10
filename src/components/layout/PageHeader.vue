<script setup lang="ts">
import DownloadIcon from '@/components/icons/DownloadIcon.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
    <button class="download-btn">
      <DownloadIcon />
      Download
    </button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #9ca3af;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 24px;
}

.title {
  flex: 1;
  font-size: 24px;
  font-weight: bold;
  color: black;
}

.download-btn {
  display: flex;
  padding: 12px;
  font-size: 14px;
  transition: color 0.3s;
}

.download-btn:hover {
  color: #1B59F8;
}
</style>