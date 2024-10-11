<script setup lang="ts">
import Card from '@/components/BaseCard.vue'
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue'
import { ref } from 'vue'

const selectedOption = ref('Month')
const isOpen = ref(false)
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const series = [
  {
    name: 'series-1',
    data: [30, 40, 145, 50, 49, 160, 70, 91, 125, 150, 200, 120]
  }
]

const options = {
  chart: {
    type: 'bar',
    height: '200px',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 1,
      columnWidth: '20%'
    }
  },
  stroke: {
    curve: 'smooth',
    width: 1
  },
  xaxis:{
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  yaxis: {
    min: 0,
    max: 200,
    tickAmount: 4,
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
}
</script>

<template>
  <Card>
    <template #header>
      <span class="activity-chart-title">
        Activity
        <button class="dropdown-button" @click="toggleDropdown">
          <span class="option">{{ selectedOption }}</span>
          <ArrowDownIcon class="icon" />
        </button>
      </span>
    </template>
    <template #footer>
      <div class="activity-chart">
        <apexchart height="230px" :options="options" :series="series"></apexchart >
      </div>
    </template>
  </Card>
</template>

<style scoped>
.activity-chart {
  border-top: 2px solid #EFF0F6;
  margin: 0 15px;
}

.activity-chart-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
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
</style>