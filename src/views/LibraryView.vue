<script setup lang="ts">
import PageHeader from '@/components/layout/PageHeader.vue'

const books = [
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", cover: "/b_5.png" },
  { title: "Clean Code", author: "Robert C. Martin", cover: "/b_4.png" },
  { title: "JavaScript: The Good Parts", author: "Douglas Crockford", cover: "/b_3.png" },
  { title: "You Don't Know JS", author: "Kyle Simpson", cover: "/b_2.png" },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", cover: "/b_1.png" },
];
</script>

<template>
  <PageHeader title="Library." />

  <main>
    <div class="library-grid">
      <div v-for="(book, index) in books" :key="index" class="book-card">
        <img :src="book.cover" :alt="book.title" class="book-cover" />
        <div class="book-details">
          <h3 class="book-title">{{ book.title }}</h3>
          <p class="book-author">by {{ book.author }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.library-page {
  padding: 2rem;
  background-color: #f4f7fb;
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

.library-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
}

.book-card {
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.book-cover {
  width: 150px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.book-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
}

.book-author {
  font-size: 0.9rem;
  color: #6b7280;
  text-align: center;
}
</style>