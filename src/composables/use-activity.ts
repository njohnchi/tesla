import { reactive, ref } from 'vue'

export const useActivity = () => {
  const series = ref([
    {
      name: 'series-1',
      data: [30, 40, 145, 50, 49, 160, 70, 91, 125, 150, 200, 120]
    }
  ])

  const options = reactive({
    chart: {
      type: 'bar',
      height: '200px',
      toolbar: {
        show: false
      }
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
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yaxis: {
      min: 0,
      max: 200,
      tickAmount: 4,
      labels: {
        show: true
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    }
  })

  const updateChart = (option: string) => {
    if (option === 'Month') {
      series.value = [
        {
          name: 'series-1',
          data: [30, 40, 145, 50, 49, 160, 70, 91, 125, 150, 200, 120]
        }
      ]
      options.xaxis.categories = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    } else if (option === 'Week') {
      series.value = [
        {
          name: 'series-1',
          data: [40, 70, 55, 90, 110, 65, 75]
        }
      ]
      options.xaxis.categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  }

  return {
    series,
    options,
    updateChart
  }
}
