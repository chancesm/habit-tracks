<template>
  <div class='dashboard'>
    <h1>DASHBOARD</h1>
    <HabitDescription></HabitDescription>
    <HabitCalendar></HabitCalendar>
    <HabitList></HabitList>
  </div>
</template>

<script>
import HabitDescription from '@/components/HabitDescription.vue'
import HabitCalendar from '@/components/HabitCalendar.vue'
import HabitList from '@/components/HabitList.vue'

export default {
  components: {
    HabitDescription,
    HabitCalendar,
    HabitList
  }
  
}
</script>

<style>

</style>
