<template>
  <div id="app">
    <v-app :dark="dark" id="inspire">
      <v-toolbar>
        <v-btn id="navTitle" flat to="/">
          <v-toolbar-title :style="outline" class="ml-0">Habit Tracks</v-toolbar-title>
	      </v-btn>
	      <v-spacer></v-spacer>
        <v-btn id="navTitle" flat to="/dashboard">
          <v-toolbar-title  class="ml-0">My Habits</v-toolbar-title>
	      </v-btn>
        <v-menu v-if="user" bottom left offset-y>
          <v-btn icon slot="activator">
            <v-icon>person</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile class="clickable" @click.stop="settings = !settings">
              <v-list-tile-title>Settings</v-list-tile-title>
            </v-list-tile>
            <v-list-tile class="clickable" @click.stop="logout">
              <v-list-tile-title>Log Out</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-progress-linear class="mt-0 z-14" :indeterminate="loading"></v-progress-linear>
      <router-view />
      <v-dialog v-if="user" v-model="settings" max-width="500px">
        <v-card>
          <v-card-title>
            Settings
          </v-card-title>
          <v-card-text>
            <v-switch
              :label="`Dark Theme: ${OnOff}`"
              readonly
              @change="toggleTheme"
              :input-value="dark"
            ></v-switch>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="settings=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-if="user" @update:returnValue="closeAddNew" v-model="addNew" max-width="500px">
        <v-card>
          <v-card-title>
            Create A New Habit
          </v-card-title>
          <v-card-text>
            <v-text-field required v-model='title' prepend-icon="edit" name="first" label="Title" type="text"></v-text-field>
            <v-text-field textarea required v-model='description' prepend-icon="edit" name="last" label="Description" type="text"></v-text-field>
            <v-radio-group v-model="color" column>
              <v-radio v-for="(color, index) in colors" :key="index"
                :label="color.color"
                :color="color.value"
                :value="color.value"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click.prevent="create">Create</v-btn><v-btn color="primary" flat @click.stop="closeAddNew">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-if="user" @update:returnValue="closeDayOpen" v-model="dayOpen" max-width="500px">
        <v-card>
          <v-card-title>
            How did you do?
          </v-card-title>
          <v-card-text>
            {{clickedDay}}<br>
            <v-radio-group v-model="dayStatus" column>
              <v-radio v-for="(color, index) in dayColors" :key="index"
                :label="color.value == 'red'?'Fail':'Success'"
                :color="color.color"
                :value="color.value"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click.prevent="addDayStatus">Submit</v-btn><v-btn color="primary" flat @click.stop="closeDayOpen">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>
<script>
const axios = require('axios')
module.exports = {
  data() {
      return{
        colors: [
          {
            color: 'red',
            value: 'red'
          },
          {
            color: 'purple',
            value: 'purple lighten-1'
          },
          {
            color: 'blue',
            value: 'blue'
          },
          {
            color: 'green',
            value: 'green'
          },
          {
            color: 'orange',
            value: 'orange'
          },
          {
            color: 'amber',
            value: 'amber'
          },
          {
            color: 'cyan',
            value: 'cyan'
          }
        ],

        //clickedDay: "",
        dayStatus: "",
        dayColors: [
          {
            color: 'red',
            value: 'red'
          },
          {
            color: 'green accent-4',
            value: 'green'
          }
        ],

        settings: false,
        

        title: "",
        description: "",
        color: ""
      }
    },
  computed: {
    dayOpen() {
      return this.$store.state.dayOpen;
    },
    clickedDay() {
      return this.$store.state.clickedDay;
    },
    addNew() {
      return this.$store.state.addNew;
    },
    user() {
      return this.$store.state.user;
    },
    dark() {
      if(this.$store.state.user){
        return this.$store.state.user.settings.dark;
      }
      else return false
    },
    OnOff() {
      return this.dark ? "On" : "Off"
    },
    loading() {
      return this.$store.state.loading;
    },
    outlineColor(){
      if(this.dark) return 'white';
      else return 'black';
    },
    outline(){
      return {
        padding: '3px',
        border : `2px solid ${this.outlineColor}`
      }
    } 
  },
  methods: {
    closeDayOpen() {
      this.$store.commit('closeDayOpen')
    },
    addDayStatus() {
      //console.log(this.clickedDay + '--' + this.dayStatus)
      this.$store.commit('updateDay',{date:this.clickedDay,status:this.dayStatus})
      this.$store.commit('closeDayOpen')
    },
    create() {
      let sendData = {
        title: this.title,
        description: this.description,
        color: this.color
      }
      //console.log(sendData);
      this.closeAddNew();
      //console.log(sendData);
      this.$store.commit('createHabit',sendData)      
    },
    closeAddNew() {
      this.$store.commit('toggleAddNew', false)
      this.title= "",
      this.description= "",
      this.color= ""
    },
    createHabit() {
      console.log('creating habit')
    },
    toggleTheme(e) {      
      this.$store.commit('toggleTheme',e)
      this.$store.commit('UserDbRefresh')
    },
    logout() {
      //console.log('Logging Out');
      axios.get('/auth/logout');
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>
<style>
.clickable {
  cursor: pointer;
}
.clickable:hover {
  background-color: rgba(0,0,0,0.25);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#navTitle {
  height: 100%;
  margin:0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
