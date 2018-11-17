<template>
<v-card>
  <vue-apex-charts
    width='100%'
    height='350'
    type='line'
    :options='options'
    :series='series'
  ></vue-apex-charts>
</v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'lineChart',
  components: {
    VueApexCharts
  },
  data () {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['Novembro', 'Dezembro', 'Janeiro', 'Fevereiro', 'Março', 'Abril']
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>

<style>

</style>
