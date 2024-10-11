<script setup lang="ts">
import Card from '@/components/Card.vue'

const series = [
  {
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 200, 220]
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
    max: 400,
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
      Activity
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
</style>