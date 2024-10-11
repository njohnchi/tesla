<script setup lang="ts">
import Card from '@/components/BaseCard.vue'
import { ref } from 'vue'

const topics = ref([
  {
    name: 'Covid Protocols',
    progress: 74,
    image: '/b_4.png'
  },
  {
    name: 'Cyber Security Basics',
    progress: 57,
    image: '/b_5.png'
  },
  {
    name: 'Social Media Policies',
    progress: 37,
    image: '/b_6.png'
  }
])
</script>

<template>
  <Card>
    <template #header>
      Strongest Topic
    </template>
    <div class="container">
      <div class="banner-wrapper" v-for="topic in topics" :key="topic.name">
        <img class="banner-image" :src="topic.image" :alt="topic.name">
        <div class="content">
          <h3 class="topic-name">{{ topic.name }}</h3>
          <div class="status">
            <div class="progress-bar-container">
              <div class="progress-bar" :style="`width: ${topic.progress}%;`"></div>
            </div>
            <span class="progress-text">{{ topic.progress }}%</span>
            <span class="connect-text">connect</span>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.banner-wrapper {
  display: flex;
  align-items: flex-start;
}

.banner-image {
  width: 70px;
  height: auto;
  border-radius: 8px;
  margin-right: 16px;
  object-fit: cover;
}

.content {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.topic-name {
  font-size: 16px;
  font-weight: 700;
  color: #111827;
}

.status {
  display: flex;
  flex: 1;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
}

.progress-bar-container {
  flex: 1;
  height: 8px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(270deg, rgba(47, 234, 155, 0.2) 15.5%, rgba(127, 221, 83, 0.2) 85.5%);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(270deg, #2FEA9B 15.5%, #7FDD53 85.5%);
  border-radius: 5px;
  transition: width 0.4s ease;
}

.progress-text {
  font-size: 14px;
  color: #374151;
  font-weight: 700;
}

.connect-text {
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #6B7280;
  transition: color 0.3s ease;
}

</style>