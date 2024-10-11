<script setup lang="ts">
import Card from '@/components/Card.vue'
</script>

<template>
  <Card>
    <template #header>
      Stronget Topic
    </template>
    <div class="container">
      <div class="banner-wrapper">
        <img class="banner-image" src="/b_4.png" alt="banner">
        <div class="content">
          <h3 class="topic-name">Covid Protocols</h3>
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
        <img class="banner-image" src="/b_5.png" alt="banner">
        <div class="content">
          <h3 class="topic-name">Cyber Security Basics </h3>
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
        <img class="banner-image" src="/b_6.png" alt="banner">
        <div class="content">
          <h3 class="topic-name">Social Media Policies</h3>
          <div class="status">
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: 37%;"></div>
            </div>
            <span class="progress-text">37%</span>
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