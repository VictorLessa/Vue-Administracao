<template>
  <v-toolbar fixed dark color="primary">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <span> ffdf{{ profileName }}</span>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import DrawerToggle from '@/mixins/Toggle'
import { mapGetters } from 'vuex'
export default {
  name: 'AppToolbar',
  mixins: [DrawerToggle],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('auth', ['profileName'])
  }
}
</script>

<style>

</style>
