<script setup lang="ts">
import Dropdown from '@/components/FilterDropdown.vue'
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()
const timeframe = computed({get() {
    return store.state.timeframeFilter;
  },
  set(value) {
    store.commit('setTimeframeFilter', value);
  }
})
const people = computed({
  get() {
    return store.state.peopleFilter;
  },
  set(value) {
    store.commit('setPeopleFilter', value);
  }
})
const topic = computed({
  get() {
    return store.state.topicFilter;
  },
  set(value) {
    store.commit('setTopicFilter', value);
  }
})
</script>

<template>
  <div class="filters">
    <Dropdown v-model="timeframe" title="Timeframe" :options="store.state.timeframeOptions" />
    <Dropdown v-model="people" title="People" :options="store.state.peopleOptions" />
    <Dropdown v-model="topic" title="Topic" :options="store.state.topicOptions" />
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 1rem;
}
</style>