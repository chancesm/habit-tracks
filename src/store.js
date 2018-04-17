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
    addNew:false,
    dayOpen: false,
    clickedDay: "",
    selected_habit: 0,
    settings: {
      dark: false,
    },    
    loading: false,
    user: null,
    habits: []
  },
  mutations: {
    deleteHabit(state,payload) {
      axios.delete(`/api/habits/${payload.id}`)
      state.selected_habit = 0
    },
    updateDay(state,payload) {
      let index = state.selected_habit;
      console.log(payload.date + '--' + payload.status)
      state.habits[state.selected_habit].calendar[payload.date] = payload.status;
      axios.put(`/api/habits/${state.habits[index]._id}`,state.habits[state.selected_habit])
      .then(resp => {
        let update = resp.data
        state.habits[index] = update;
      })
    },
    selectDay(state, payload) {
      state.clickedDay = payload;
      state.dayOpen = true;
    },
    closeDayOpen(state, payload) {
      state.dayOpen = false;
    },
    toggleAddNew(state, payload) {
      state.addNew = payload;
    },
    UserDbRefresh(state, payload) {
      axios.post(`/api/users/${state.user._id}`, state.user)
      .then(resp => {
        state.user = resp.data
      })      
    },
    toggleTheme(state, payload) {
      //console.log(payload)
      state.user.settings.dark = payload;      
    },
    select (state, payload) {
      if (payload != state.selected_habit){
        state.selected_habit = payload;
      }
    },
    // setSettings (state, payload) {
    //   if(state.user) {
    //     state.settings = state.user.settings;
    //   }
    // },
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
    },
    createHabit(state,payload) {
      // state.loading = true
      let newHabit = {
        title: payload.title,
        description: payload.description,
        color: payload.color,
        owner: state.user._id,
        calendar: {},
      }
      axios.post('/api/habits',newHabit)
      .then(resp => {
        state.habits.push(resp.data)
        // state.loading = false
      })
      .catch(err => {
        // state.loading = false;
      })     
    }
  },
  actions: {
    getHabits(state) {
      // state.loading = true
      axios.get('/api/habits')
      .then(({data}) => {
        state.habits = data
        // state.loading = false
      })
      .catch(err => {
        // state.loading = false
      })
      //state.loading = false
    }
  },
  plugins: [vuexLocal.plugin]
})
