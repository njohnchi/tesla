<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <RouterLink :to="to" exact-active-class="active" class="nav-link">
    <slot />
  </RouterLink>
</template>

<style scoped>
.nav-link {
  display: flex;
  padding: 12px;
  margin-bottom: 8px;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #4D4D4D;
  text-decoration: none;
  border-radius: 12px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.nav-link.active,
.nav-link:hover {
  background-color: #1B59F81A;
  color: #1B59F8;
}

.nav-link.active {
  background-color: #1B59F81A;
  color: #1B59F8;
}
</style>