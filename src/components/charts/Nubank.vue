<template>
  <vue-apex-charts type=line height=350 :options="chartOptions" :series="series"></vue-apex-charts>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'Nubank',
  components: {
    VueApexCharts
  },
  data () {
    return {
      series: [{
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
      }],
      chartOptions: {
        chart: {
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          width: 7,
          curve: 'smooth'
        }
      }
    }
  }
}
</script>

<style>

</style>
