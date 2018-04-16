<template>
    <div class= "habit-calendar">
        <v-card>
            <v-date-picker
            full-width
            v-model="picker"
            :color="habit.color"
            :events="setEvent"
            :event-color="setEventColor"
            :max="new Date().toISOString().split('T')[0]"
            @input="selectDay"
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
            calendar:{}
        }
    }
},
data() {
    return {
        picker: ""
    }
},
methods: {
    selectDay(date) {
        this.$store.commit('selectDay',date);
    },
    setEvent(date) {
        //console.log(date);
        if (this.habit.calendar[date])
        {
            return true;
        }
        return false;
    },
    setEventColor(date) {
        if (this.habit.calendar[date])
        {
            return this.habit.calendar[date]=="red" ? 'red' : 'green accent-4';
        }
        else return null;
    }
  }
}
</script>

<style>

</style>
