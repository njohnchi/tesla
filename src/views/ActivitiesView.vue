<script setup lang="ts">
import PageHeader from '@/components/layout/PageHeader.vue'

const activities = [
  { id: 1, type: "comment", description: "John commented on a task", time: "2 hours ago", icon: "💬" },
  { id: 2, type: "upload", description: "Anna uploaded a file", time: "5 hours ago", icon: "📁" },
  { id: 3, type: "update", description: "Project settings updated", time: "1 day ago", icon: "⚙️" },
  { id: 4, type: "task", description: "New task assigned to you", time: "2 days ago", icon: "✅" },
  { id: 5, type: "meeting", description: "Meeting scheduled with the client", time: "3 days ago", icon: "📅" },
];
</script>

<template>
  <PageHeader title="Activities." />

  <main>
    <div class="activities-list">
      <div v-for="activity in activities" :key="activity.id" class="activity-card">
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
  background-color: #f9fafb;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #374151;
  margin-bottom: 2rem;
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