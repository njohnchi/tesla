<script setup lang="ts">
import PageHeader from '@/components/layout/PageHeader.vue'
import { useStore } from '@/store'

const store = useStore()
</script>

<template>
  <PageHeader title="People." />

  <main>
    <div class="people-grid">
      <div v-for="(person, index) in store.state.people" :key="index" class="person-card">
        <img :src="person.image" :alt="person.name" class="person-image" />
        <div class="person-details">
          <h3 class="person-name">{{ person.name }}</h3>
          <p class="person-role">{{ person.role }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
}

.person-card {
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.person-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.person-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.person-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #1f2937;
}

.person-role {
  font-size: 0.9rem;
  color: #6b7280;
}
</style>
