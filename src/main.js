import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import axios from "axios";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    const userData = localStorage.getItem("user");
    const login = localStorage.getItem("login");
    const token = localStorage.getItem("token");

    let response = {
      data: {
        userData,
        login
      }
    }

    if (userData) {
      axios.defaults.headers.common["Authorization"] = `Token ${token}`;
      this.$store.commit('auth/auth_success', response);
      this.$store.commit('auth/auth_login', response);
    }
  },
  render: h => h(App)
}).$mount('#app')
