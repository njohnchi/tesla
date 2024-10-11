<script setup lang="ts">
import PageHeader from '@/components/layout/PageHeader.vue'
import { useStore } from '@/store'

const store = useStore()
</script>

<template>
  <PageHeader title="Activities." />

  <main class="activities-page">
    <div class="activities-list">
      <div v-for="activity in store.state.activities" :key="activity.id" class="activity-card">
        <div class="activity-icon">{{ activity.icon }}</div>
        <div class="activity-details">
          <p class="activity-description">{{ activity.description }}</p>
          <span class="activity-time">{{ activity.time }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.activities-page {
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.activities-list {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.activity-card {
  display: flex;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
}

.activity-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.activity-details {
  display: flex;
  flex-direction: column;
}

.activity-description {
  font-size: 1.1rem;
  font-weight: 500;
  color: #1f2937;
}

.activity-time {
  font-size: 0.9rem;
  color: #6b7280;
}
</style>