import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)
const axios = require('axios')
export default new Vuex.Store({
  state: {
    selected_habit: 0,
    settings: {
      dark: false,
    },    
    loading: false,
    user: null,
    habits: []
  },
  mutations: {
    select (state, payload) {
      if (payload != state.selected_habit){
        state.selected_habit = payload;
      }
    },
    setSettings (state, payload) {
      if(state.user) {
        state.settings = state.user.settings;
      }
    },
    loadHabits(state, payload) {
      if(state.habits != payload) {
        state.habits = payload;
      }
    },
    login(state, payload){
      state.user = payload;
    },
    logout(state,payload) {
      state.user = null;
      state.habits = [];
      state.settings.dark = false;
      state.selected_habit = 0;
    }
  },
  actions: {
    getHabits(state) {
      state.loading = true
      axios.get('/api/habits')
      .then(({data}) => {
        state.habits = data
      })
      state.loading = false
    }
  },
  plugins: [vuexLocal.plugin]
})
