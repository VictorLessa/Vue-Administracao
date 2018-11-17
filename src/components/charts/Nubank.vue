<template>
  <div class="card">
    <h2>Nubank</h2>
    <vue-apex-charts type=line height=50 :options="chartOptions" :series="series"></vue-apex-charts>
  </div>
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
        name: '',
        data: [4, 29, 5, 15]
      }],
      chartOptions: {
        chart: {
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          opacity: 0.3,
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          }
        },
        markers: {
          size: 0,
          opacity: 0.9,
          colors: ['#FFA41B'],
          strokeColor: '#fff',
          strokeWidth: false,
          style: 'inverted', // full, hollow, inverted
          hover: {
            size: 1
          }
        },
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        yaxis: {
          min: 0
        },
        tooltip: {
          enabled: true,
          theme: false,
          x: {
            show: false
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 20px;
  height: 100px;
  display:  flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);
}
.apexcharts-tooltip {
  background: #f3f3f3;
  color: orange;
}
</style>
