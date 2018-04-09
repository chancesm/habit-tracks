<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-8">
          <v-toolbar class="elevation-2">
            <v-toolbar-title>Please Log In</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field required v-model='uname' prepend-icon="person" name="login" label="Username" type="text"></v-text-field>
              <v-text-field required v-model='pass' prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
              <v-btn type="submit" color="primary" @click.prevent="loginMethod">Login</v-btn>
            </v-form>
          </v-card-text>
          
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        uname: "",
        pass: ""
      }
    },
    methods : {
      loginMethod() {
        console.log(`Logging In: ${this.uname} -- ${this.pass}`)
      }
    }
  }
</script>

<style>

</style>
