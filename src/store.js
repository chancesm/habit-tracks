import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected_habit: 0,
    dark: false,
    loading: false,
    user: {},
    habits: [
      {
        name: "Read Scriptures Daily",
        description: "I want to read my scriptures every day. My goal is to do this in the morning, but anytime works as long as it gets done.",
        color: "blue",
        dates: {
          "2018-02-15": 'green',
          "2018-02-16": "red",
          "2018-02-17": "green",
          "2018-02-18": "green"
        }
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
  },
  mutations: {
    select (state, payload) {
      if (payload != state.selected_habit){
        state.selected_habit = payload;
      }
    }
  },
  actions: {

  }
})
