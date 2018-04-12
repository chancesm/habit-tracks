<template>
  <div id="welcome">
    <v-jumbotron >
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Welcome to Habit Tracks</h3>
            <span class="subheading">A simple way to keep up with your goals and habits. Create good habits, or track your progress kicking bad ones.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Click below to sign up!</div>
            <v-btn to="/register" large color="primary" class="mx-0">Get Started</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
