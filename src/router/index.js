import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"

Vue.use(VueRouter)

const routes = new VueRouter({
  routes: [
    { path: '/', name: 'Strona główna', component: Home },
    { path: '/about', name: 'O mnie', component: About },
  ]
})

  
  export default routes