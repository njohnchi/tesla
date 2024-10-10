<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue'
import SidebarNav from '@/components/layout/SidebarNav.vue'
</script>

<template>
  <aside class="sidebar">
    <div class="logo-container">
      <AppLogo />
    </div>

    <SidebarNav />
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px;
  width: 100%;
  max-width: 240px;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
