<template>
  <v-container>
    <v-layout row wrap>
      <v-flex column lg3>
        <nubank/>
      </v-flex>
      <v-flex column lg3>
      </v-flex>
      <v-flex column lg3>
      </v-flex>
      <v-flex column lg3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex column lg6>
        <donuts/>
      </v-flex>
      <v-flex column lg6>
        <line-charts/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Donuts from '@/components/charts/Donuts.vue'
import LineCharts from '@/components/charts/Line.vue'
import Nubank from '@/components/charts/Nubank.vue'
export default {
  name: 'Dashboard',
  components: {
    Donuts,
    LineCharts,
    Nubank
  },
  data () {
    return {
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
