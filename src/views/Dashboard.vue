<template>
  <div class="dashboard">
       
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex class="xs12">
            <HabitDescription :habit="habit"/>
          </v-flex>
          <v-flex class="sm6 xs12">
            <HabitCalendar :habit="habit"/>
          </v-flex>
          <v-flex class="sm6 xs12">
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
    habit() {
      return this.habits[this.selected_habit];
    }
  },
  data() {
    return {
      fab: true,
      selected_habit: 0,
      habits: [
        {
          name: "Read Scriptures Daily",
          description: "I want to read my scriptures every day. My goal is to do this in the morning, but anytime works as long as it gets done.",
          color: "blue",
          dates: {}
        },
        {
          name: "Say Morning Prayer",
          description: "Prayer is good. I want to start my day off good by praying.",
          color: "red",
          dates: {}
        },
        {
          name: "Say Evening Prayer",
          description: "Prayer is good. I want to end my day on a good note by praying.",
          color: "green",
          dates: {}
        },
        {
          name: "Make the Bed",
          description: "My wife hates it when the bed is messy, so I am going to make the bed every day to make her happy",
          color: "purple",
          dates: {}
        }
      ]
    }
  }
  
}
</script>

<style>

</style>
