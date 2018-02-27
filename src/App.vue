<template>
  <div id="app">
    <v-app dark id="inspire">
      <v-toolbar>
        <v-btn id="navTitle" flat to="/">
	  <v-avatar>
	    <img src="https://vuetifyjs.com/static/apple-touch-icon-180x180.png" alt="logo">
	  </v-avatar>
	  <v-toolbar-title >Habit Tracks</v-toolbar-title>
	</v-btn>
	<v-spacer></v-spacer>
	<v-toolbar-items>
	  <v-btn flat to="/about">Log In</v-btn>
	</v-toolbar-items>
      </v-toolbar>
      <v-progress-linear class="mt-0 z-14" :indeterminate="loading"></v-progress-linear>
      <router-view />
    </v-app>
  </div>
</template>
<script>
module.exports = {
  computed: {
    loading() {
      return this.$store.state.loading;
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
