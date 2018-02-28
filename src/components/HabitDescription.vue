<template>
    <div class= "habit-description">
        <v-card v-if="!habit">
            <v-card-title class="text-xs-center">
              <h3>You Don't Have Any Habits!</h3>
            </v-card-title>
            <v-card-text class="text-xs-left">
                Click the <v-icon>add_circle</v-icon> to create a new Habit!
            </v-card-text>
        </v-card>
        <v-card v-else>
            <v-card-title class="text-xs-center">
              <h3>{{habit.name}}</h3>
            </v-card-title>
            <v-card-text class="text-xs-left">
                {{habit.description}}
            </v-card-text>
        </v-card>
    </div>  
</template>

<script>
export default {
    name: 'HabitDescription',
    props: {
        habit: Object
    }
}
</script>

<style>

</style>
