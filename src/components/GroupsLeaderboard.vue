<script setup lang="ts">
import Card from '@/components/Card.vue'
</script>

<template>
  <Card>
    <template #header>
      Groups Leaderboard
    </template>
    <div class="container">
      <div class="banner-wrapper">
        <div class="content">
          <h3 class="topic-name">Food Safety</h3>
          <div class="status">
            <span class="correct-text">67 Points / User - 84% correct</span>
            <span>
              7
              <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.64353 1.27528C5.9877 0.659541 6.8481 0.659541 7.19226 1.27528L11.8384 9.5878C12.1826 10.2035 11.7524 10.9732 11.0641 10.9732H1.77171C1.08339 10.9732 0.653188 10.2035 0.997349 9.5878L5.64353 1.27528Z" fill="#1FE08F"/>
                </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="banner-wrapper">
        <div class="content">
          <h3 class="topic-name">Food Safety</h3>
          <div class="status">
            <span class="correct-text">37 Points / User - 54% correct</span>
            <span>
              3
              <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
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