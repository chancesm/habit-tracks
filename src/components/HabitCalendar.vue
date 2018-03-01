<template>
    <div class= "habit-calendar">
        <v-card>
            <v-date-picker
            full-width
            :color="habit.color"
            :events="setEvent"
            :event-color="setEventColor"
            ></v-date-picker>
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
},
methods: {
    setEvent(date) {
        //console.log(date);
        if (this.habit.dates[date])
        {
            return true;
        }
        return false;
    },
    setEventColor(date) {
        if (this.habit.dates[date])
        {
            return this.habit.dates[date];
        }
        else return null;
    }
  }
}
</script>

<style>

</style>
