<script setup lang="ts">
import Card from '@/components/BaseCard.vue'
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue'
import { ref, computed, watchEffect } from 'vue'
import { useActivity } from '@/composables/use-activity'
import { useStore } from '@/store'
import { onClickOutside } from '@vueuse/core'

const store = useStore()
const { options, series, updateChart } = useActivity()
const isOpen = ref(false)
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
const target = ref(null)

const selectedOption = computed({
  get() {
    return store.state.activityFilter;
  },
  set(value) {
    store.commit('setActivityFilter', value);
  }
})

const update = (option: string) => {
  selectedOption.value = option
  isOpen.value = false
}

onClickOutside(target, () => {
  isOpen.value = false
})

watchEffect(() => {
  updateChart(selectedOption.value)
})
</script>

<template>
  <Card>
    <template #header>
      <div class="activity-chart-title">
        Activity
        <div class="dropdown-container" ref="target">
          <button class="dropdown-button" @click="toggleDropdown">
            <span class="option">{{ selectedOption }}</span>
            <ArrowDownIcon class="icon" />
          </button>
          <ul v-if="isOpen" class="dropdown-menu">
            <li @click="update('Month')">Month</li>
            <li @click="update('Week')">Week</li>
          </ul>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="activity-chart" :key="selectedOption">
        <apexchart height="230px" :options="options" :series="series"></apexchart>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.activity-chart {
  border-top: 2px solid #EFF0F6;
  margin: 0 15px;
}

.activity-chart-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-container {
  position: relative;
}

.dropdown-button {
  background-color: white;
  border: 0;
  padding: 0;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  display: flex;
  align-items: center;
}

.dropdown-button:hover {
  color: #1B59F8;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 5px;
  margin-top: 5px;
  list-style: none;
  z-index: 30;
}

.dropdown-menu li {
  padding: 5px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}
</style>
