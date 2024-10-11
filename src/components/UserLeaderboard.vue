<script setup lang="ts">
import Card from '@/components/BaseCard.vue'
import { ref } from 'vue'

const users = ref([
  {
    name: 'Jesse Thomas',
    points: 673,
    correct: 73,
    image: '/p_1.png',
    rating: 4,
  },
  {
    name: 'Thisal Mathiyazhagan',
    points: 375,
    correct: 34,
    image: '/p_2.png',
    rating: -2,
  },
])
</script>

<template>
  <Card>
    <template #header>
      User Leaderboard
    </template>
    <div class="container">
      <div class="banner-wrapper" v-for="user in users" :key="user.name">
        <img class="profile-image" :src="user.image" :alt="user.name">
        <div class="content">
          <h3 class="topic-name">{{ user.name }}</h3>
          <div class="status">
            <span class="correct-text">{{ user.points }} Points - {{ user.correct }}% correct</span>
            <span>
              {{ Math.abs(user.rating) }}
              <svg v-if="user.rating >= 0 " width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.64353 1.27528C5.9877 0.659541 6.8481 0.659541 7.19226 1.27528L11.8384 9.5878C12.1826 10.2035 11.7524 10.9732 11.0641 10.9732H1.77171C1.08339 10.9732 0.653188 10.2035 0.997349 9.5878L5.64353 1.27528Z" fill="#1FE08F"/>
                </svg>
              <svg v-else width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.64353 10.4696C5.9877 11.0853 6.8481 11.0853 7.19226 10.4696L11.8384 2.15707C12.1826 1.54133 11.7524 0.771654 11.0641 0.771654H1.77171C1.08339 0.771654 0.653188 1.54133 0.997349 2.15707L5.64353 10.4696Z" fill="#FF3E13"/>
              </svg>
            </span>
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

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 100%;
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

.correct-text {
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #6B7280;
  transition: color 0.3s ease;
}

</style>