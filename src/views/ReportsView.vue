<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const count = computed(() => store.state.count)

const increment = () => {
  store.commit('increment')
}
</script>

<template>
  <div>
    <button class="btn"
      @click="increment">{{ count }}</button>
  </div>
</template>

<style scoped>
.btn {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>