<template>
    <div class= "habit-calendar">
        <v-card>
            <v-date-picker
            full-width
            :color="habit.color"></v-date-picker>
        </v-card>
    </div>  
</template>

<script>
export default {
name: 'HabitCalendar',
props: {
    habit: {
        type: Object,
        default: {
            color: "blue",
            dates:{}
        }
    }
}
}
</script>

<style>

</style>
