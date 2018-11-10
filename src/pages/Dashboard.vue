<template>
  <div>
    <vue-apex-charts
      width='100%'
      height='350'
      type='bar'
      :options='chartOptions'
      :series='series'
    ></vue-apex-charts>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Dashboard',
  components: {
    VueApexCharts
  },
  data () {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar',
          animations: {
            speed: 200
          }
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            distributed: true
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 30, 49]
        }
      ]
    }
  },
  beforeCreate () {
    // if (!this.$session.exists()) {
    //   this.$router.push('/login')
    // }
  },
  computed: {
    ...mapState('auth', ['details'])
  },
  mounted () {
    this.Save()
  },
  methods: {
    ...mapActions('auth', ['getDetails']),
    Save () {
      let details = JSON.parse(localStorage.getItem('token'))
      console.log(details)
      this.getDetails(details)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
