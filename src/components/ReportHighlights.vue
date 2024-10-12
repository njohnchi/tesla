<script setup lang="ts">
import Card from '@/components/BaseCard.vue'
const series = [
  {
    name: 'series-1',
    data: [30, 48, 42, 70, 59, 60, 40, 61, 125]
  }
]

const options = {
  chart: {
    type: 'area',
    toolbar: {
      show: false
    }
  },
  stroke: {
    curve: 'smooth',
    width: 1
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  grid: {
    show: false
  },
  legend: {
    show: false
  }
}
</script>

<template>
  <div class="highlight-grid">
    <Card>
      <template #header> Active Users </template>
      <div class="highlight-text">27<span>/80</span></div>
    </Card>
    <Card>
      <template #header> Questions Answered </template>
      <div class="highlight-text">3,455</div>
    </Card>
    <Card>
      <template #header> Av. Session Length </template>
      <div class="highlight-text">3,455</div>
    </Card>
    <Card>
      <template #header> Starting Knowledge </template>
      <div class="highlight-text">64%</div>
      <template #footer>
        <apexchart :options="options" :series="series"></apexchart>
      </template>
    </Card>
    <Card>
      <template #header> Current Knowledge </template>
      <div class="highlight-text">86%</div>
      <template #footer>
        <apexchart :options="options" :series="series"></apexchart>
      </template>
    </Card>
    <Card>
      <template #header> Knowledge Gain </template>
      <div class="highlight-text">+34%</div>
      <template #footer>
        <apexchart :options="options" :series="series"></apexchart>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.highlight-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.highlight-text {
  font-size: 1.5em;
  font-weight: 700;
  color: #333;
}

.highlight-text span {
  font-weight: 400;
}
</style>
