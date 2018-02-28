<template>
  <div class="dashboard">
    
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex class="xs12">
            <HabitDescription />
          </v-flex>
          <v-flex class="xs6">
            <HabitCalendar />
          </v-flex>
          <v-flex class="xs6">
            <HabitList />
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
  }
  
}
</script>

<style>

</style>
