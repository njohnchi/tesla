<script setup lang="ts">

</script>

<template>
  <div class="card">
    <slot name="image" />
    <h2 class="card-title"><slot name="header" /></h2>
    <div class="card-content">
      <slot />
    </div>
    <slot name="footer" />
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  padding-bottom: 10px;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 0 20px;
}

.card-title {
  padding: 10px 20px;
  font-size: .8em;
  font-weight: 600;
  color: #333;
}
</style>