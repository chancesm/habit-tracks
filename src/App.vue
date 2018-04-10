<template>
  <div id="app">
    <v-app :dark="dark" id="inspire">
      <v-toolbar>
        <v-btn id="navTitle" flat to="/">
          <v-toolbar-title :style="outline" class="ml-0">Habit Tracks</v-toolbar-title>
	      </v-btn>
	      <v-spacer></v-spacer>
        <v-btn id="navTitle" flat to="/dashboard">
          <v-toolbar-title  class="ml-0">My Habits</v-toolbar-title>
	      </v-btn>
        <v-menu bottom left offset-y>
          <v-btn icon slot="activator">
            <v-icon>person</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile class="clickable" @click.stop="settings('open')">
              <v-list-tile-title>Settings</v-list-tile-title>
            </v-list-tile>
            <v-list-tile class="clickable" @click.stop="logout">
              <v-list-tile-title>Log Out</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-progress-linear class="mt-0 z-14" :indeterminate="loading"></v-progress-linear>
      <router-view />
    </v-app>
  </div>
</template>
<script>
const axios = require('axios')
module.exports = {
  computed: {
    dark() {
      return this.$store.state.settings.dark;
    },
    loading() {
      return this.$store.state.loading;
    },
    outlineColor(){
      if(this.dark) return 'white';
      else return 'black';
    },
    outline(){
      return {
        padding: '3px',
        border : `2px solid ${this.outlineColor}`
      }
    } 
  },
  methods: {
    logout() {
      console.log('Logging Out');
      axios.get('/auth/logout');
      this.$store.commit('logout')
      this.$router.push('/')
    },
    settings(status) {
      console.log(`Settings menu is ${status}`);
    }
  }

}
</script>
<style>
.clickable {
  cursor: pointer;
}
.clickable:hover {
  background-color: rgba(0,0,0,0.25);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#navTitle {
  height: 100%;
  margin:0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
