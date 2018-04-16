import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import VueResource from 'vue-resource'


Vue.use(Vuetify)
// Vue.use(VueResource)
Vue.config.productionTip = false
// Vue.config.devtools = true
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
