
<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="email" prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field v-model="password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                      <v-alert :value="value" color="error" icon="warning" outline>{{error}}</v-alert>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data: () => ({
    email: '',
    password: '',
    error: '',
    value: false
  }),
  computed: {
    ...mapState('auth', ['alertError'])
  },
  watch: {
    alertError (alertError) {
      this.value = true
      this.error = alertError
    }
  },
  methods: {
    ...mapActions('auth', ['loginUser', 'getDetails']),
    login () {
      if (!this.email || !this.password) {
        this.error = 'insirir valor'
      } else {
        this.loginUser({email: this.email, password: this.password})
          .then(
            user => {
              if (user !== undefined) {
                // this.getDetails(user.data.data)
                //   .then(
                //     details => {
                //       if (details !== undefined) {
                //         this.$session.set('details', details.data.data)
                //       }
                //     }
                //   )
                localStorage.setItem('token', JSON.stringify(user.data.data))
                this.$session.set('jwt', user.data.data)
                this.$session.start()
                this.$router.push('/')
              }
            }
          )
      }
    }
  },
  props: {
    source: String
  }
}
</script>
