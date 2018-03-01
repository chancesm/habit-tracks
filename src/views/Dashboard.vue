<template>
  <div class="dashboard">
       
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex class="xs12">
            <HabitDescription :habit="habit"/>
          </v-flex>
          <v-flex class="sm7 xs12">
            <HabitCalendar :habit="habit"/>
          </v-flex>
          <v-flex class="sm5 xs12">
            <HabitList :habits="habits" :selected="selected_habit"/>
          </v-flex>
        </v-layout>
      </v-container>
      
  </div>
</template>

<script>
import HabitDescription from '@/components/HabitDescription.vue'
import HabitCalendar from '@/components/HabitCalendar.vue'
import HabitList from '@/components/HabitList.vue'

export default {
  name:'dashboard',
  components: {
    HabitDescription,
    HabitCalendar,
    HabitList
  },
  computed: {
    selected_habit() {
      return this.$store.state.selected_habit
    },
    habits() {
      return this.$store.state.habits;
    },
    habit() {
      return this.habits[this.selected_habit];
    }
  }  
}
</script>

<style>

</style>
