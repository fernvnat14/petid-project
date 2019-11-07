import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { firebaseConfig } from "../firebase.config";
import axios from 'axios'
import VueAxios from 'vue-axios'

let app = "";
Vue.use(VueAxios, axios)
Vue.config.productionTip = false;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
