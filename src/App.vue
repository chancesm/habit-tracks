<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar>
	<v-toolbar-items>
	  <v-btn flat to="/">Dashboard</v-btn>
	</v-toolbar-items>
	<v-spacer></v-spacer>
	<v-avatar>
	  <img src="https://vuetifyjs.com/static/apple-touch-icon-180x180.png" alt="logo">
	</v-avatar>
	<v-toolbar-title>Habit Tracks</v-toolbar-title>
	<v-spacer></v-spacer>
	<v-toolbar-items>
	  <v-btn flat to="/about">Log In</v-btn>
	</v-toolbar-items>
      </v-toolbar>
      <router-view />
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
