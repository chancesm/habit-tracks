<template>
    <div class= "habit-list">
        <v-card  class= "mb-2 clickable" v-if="habits.length>0" v-for="(habit,index) in habits" :key="habit._id" >
            <v-container fill-height  @click="()=>select_habit(index)">
                <v-layout row justify-space-between>
                    <v-flex class="xs2">
                        <v-icon large v-if="index == selected" :color="habit.color">check_circle</v-icon>
                        <v-icon v-else :color="habit.color">fiber_manual_record</v-icon>
                    </v-flex>
                    <v-flex justify-center align-content-center class="xs8">
                        <h3 class="text-xs-center">{{habit.title}}</h3>
                    </v-flex>
                    <v-flex class="xs2 hidden-xs-and-down">
                        <!-- <v-icon class="clickable" color="red">remove_circle_outline</v-icon> -->
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <v-layout row justify-center>
            <v-flex class="xs2">
                <v-btn fab @click.stop="openAddNew">
                    <v-icon>add_circle</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </div>  
</template>

<script>
export default {
    name: 'HabitList',
    props: {
        habits: Array,
        selected: Number
    },
    computed: {
        borderColor() {
            return this.habits[this.selected].color;
        }
    },
    methods: {
        openAddNew() {
            this.$store.commit('toggleAddNew', true);
        },
        select_habit(index) {
            this.$store.commit('select', index);
        }
    }
}
</script>

<style scoped>
</style>
