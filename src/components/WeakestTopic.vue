<script setup lang="ts">
import Card from '@/components/Card.vue'
</script>

<template>
  <Card>
    <template #header>
      Weakest Topic
    </template>
    <div class="container">
      <div class="banner-wrapper">
        <img class="banner-image" src="/b_1.png" alt="banner">
        <div class="content">
          <h3 class="topic-name">Food Safety</h3>
          <div class="status">
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: 74%;"></div>
            </div>
            <span class="progress-text">74%</span>
            <span class="connect-text">connect</span>
          </div>
        </div>
      </div>
      <div class="banner-wrapper">
        <img class="banner-image" src="/b_2.png" alt="banner">
        <div class="content">
          <h3 class="topic-name">Compliance Basics Procedures </h3>
          <div class="status">
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: 52%;"></div>
            </div>
            <span class="progress-text">52%</span>
            <span class="connect-text">connect</span>
          </div>
        </div>
      </div>
      <div class="banner-wrapper">
        <img class="banner-image" src="/b_3.png" alt="banner">
        <div class="content">
          <h3 class="topic-name">Company Networking</h3>
          <div class="status">
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: 36%;"></div>
            </div>
            <span class="progress-text">36%</span>
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
  background: linear-gradient(143.13deg, rgba(255, 191, 26, 0.2) 5.36%, rgba(255, 64, 128, 0.2) 94.64%);
}

.progress-bar {
  height: 100%;
  background: linear-gradient(143.13deg, #FFBF1A 5.36%, #FF4080 54.64%);
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