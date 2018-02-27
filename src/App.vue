<template>
  <div id="app">
    <v-app :dark="dark" id="inspire">
      <v-toolbar>
        <v-btn id="navTitle" flat to="/">
          <v-toolbar-title :style="outline" class="ml-0">Habit Tracks</v-toolbar-title>
	      </v-btn>
	      <v-spacer></v-spacer>
        <v-btn id="navTitle" flat to="/about">
          <v-toolbar-title  class="ml-0">Log In</v-toolbar-title>
	      </v-btn>
      </v-toolbar>
      <v-progress-linear class="mt-0 z-14" :indeterminate="loading"></v-progress-linear>
      <router-view />
    </v-app>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      dark : true
      
    }
  },
  computed: {
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
