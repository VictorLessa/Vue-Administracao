<template>
<div>
  <template v-if="$route.meta.public == false">
    <v-app>
      <!-- drawer -->
      <app-drawer app :drawer="drawer"></app-drawer>

      <!-- toolbar -->
      <v-toolbar fixed dark color="primary">
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>refresh</v-icon>
        </v-btn>
        <span> ffdf{{ profileName }}</span>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <!-- views -->
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </template>
  <template v-else>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </template>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>

<script>
import AppToolbar from '@/components/AppToolbar'
import AppDrawer from '@/components/AppDrawer'
import ToggleMixin from '@/mixins/Toggle.js'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  mixins: [ToggleMixin],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('auth', ['profileName'])
  },
  components: {
    AppToolbar,
    AppDrawer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #1b213b;
}
</style>
